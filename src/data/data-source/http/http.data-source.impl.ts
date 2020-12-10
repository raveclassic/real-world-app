import { reader } from '../../../util/reader'
import { strict, Type, unknown } from 'io-ts'
import Bluebird from 'bluebird'
import { either } from 'fp-ts'
import { Articles, articlesCodec } from '../../../domain/entity/article/article.entity'
import { User } from '../../../domain/entity/user/user.entity'
import { HTTPDataSource } from './http.data-source'
import { Tags, tagsCodec } from '../../../domain/entity/tag/tag.entity'
import { AuthInfo, authInfoCodec } from '../../../domain/entity/auth-info/auth-info.entity'

export interface WindowLike {
	readonly fetch: typeof window['fetch']
}

export const httpDataSourceImpl = reader.combine(
	reader.key<WindowLike>()('window'),
	reader.key<string>()('apiURL'),
	(window, apiURL): HTTPDataSource => {
		const request = async <T>(
			url: string,
			init: RequestInit,
			codec: Type<T, unknown>,
			token?: string,
		): Bluebird<T> => {
			const result = await new Bluebird((resolve, reject, onCancel) => {
				const controller = new AbortController()
				onCancel?.(() => controller.abort())

				const headers: Record<string, string> = {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				}
				if (token !== undefined) {
					headers['Authorization'] = `Token ${token}`
				}

				window
					.fetch(`${apiURL}${url}`, {
						method: 'GET',
						credentials: 'include',
						...init,
						headers,
						signal: controller.signal,
					})
					.then(async (response) => {
						const json = await response.json()
						if (response.ok) {
							return json
						} else {
							throw json
						}
					})
					.then(resolve)
					.catch(reject)
			})
			const decoded = codec.decode(result)
			if (either.isLeft(decoded)) {
				throw decoded.left
			}
			return decoded.right
		}

		const getAllArticles = async (): Bluebird<Articles> =>
			await request('/articles', { method: 'GET' }, articlesCodec)

		const getFeedArticles = async (token: string): Bluebird<Articles> =>
			await request('/articles/feed', { method: 'GET' }, articlesCodec, token)

		const getCurrentUser = async (token: string): Bluebird<AuthInfo> => {
			const response = await request('/user', { method: 'GET' }, authResponseCodec, token)
			return response.user
		}

		const login = async (email: string, password: string): Bluebird<AuthInfo> => {
			const response = await request(
				'/users/login',
				{
					method: 'POST',
					body: JSON.stringify({ user: { email, password } }),
				},
				authResponseCodec,
			)
			return response.user
		}

		const register = async (email: string, password: string): Bluebird<AuthInfo> => {
			const response = await request(
				'/users',
				{
					method: 'POST',
					body: JSON.stringify({ user: { email, password } }),
				},
				authResponseCodec,
			)
			return response.user
		}

		const saveUser = async (user: User, token: string): Bluebird<void> => {
			await request(
				'/user',
				{
					method: 'PUT',
					body: JSON.stringify({ user }),
				},
				unknown,
				token,
			)
		}

		const getTags = async (): Bluebird<Tags> => {
			const response = await request(
				'/tags',
				{
					method: 'GET',
				},
				tagsResponseCodec,
			)
			return response.tags
		}

		const favouriteArticle = async (slug: string, token: string): Bluebird<void> => {
			await request(
				`/articles/${slug}/favourite`,
				{
					method: 'POST',
				},
				unknown,
				token,
			)
		}

		const unfavouriteArticle = async (slug: string, token: string): Bluebird<void> => {
			await request(
				`/articles/${slug}/favourite`,
				{
					method: 'DELETE',
				},
				unknown,
				token,
			)
		}

		return {
			getAllArticles,
			getFeedArticles,
			getCurrentUser,
			login,
			register,
			saveUser,
			getTags,
			favouriteArticle,
			unfavouriteArticle,
		}
	},
)

const tagsResponseCodec = strict({ tags: tagsCodec })
const authResponseCodec = strict({ user: authInfoCodec })
