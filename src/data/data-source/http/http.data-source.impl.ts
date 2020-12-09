import { reader } from '../../../util/reader'
import { strict, Type, voidType } from 'io-ts'
import Bluebird from 'bluebird'
import { either } from 'fp-ts'
import { Articles, articlesCodec } from '../../../domain/entity/article/article.entity'
import { User, userCodec } from '../../../domain/entity/user/user.entity'
import { HTTPDataSource } from './http.data-source'
import { Tags, tagsCodec } from '../../../domain/entity/tag/tag.entity'

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
				const headers = new Headers({
					'Content-Type': 'application/json',
					Accept: 'application/json',
				})
				headers.append('Authorization', `Token ${token}`)

				window
					.fetch(`${apiURL}${url}`, {
						method: 'GET',
						...init,
						headers: new Headers({
							...headers,
							...init.headers,
						}),
						signal: controller.signal,
					})
					.then((response) => response.json())
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

		const getCurrentUser = async (token: string): Bluebird<User> =>
			await request('/user', { method: 'GET' }, userCodec, token)

		const login = async (email: string, password: string): Bluebird<User> =>
			await request(
				'/user/login',
				{
					method: 'POST',
					body: JSON.stringify({ user: { email, password } }),
				},
				userCodec,
			)

		const register = async (email: string, password: string): Bluebird<User> =>
			await request(
				'/users',
				{
					method: 'POST',
					body: JSON.stringify({ user: { email, password } }),
				},
				userCodec,
			)

		const saveUser = async (user: User, token: string): Bluebird<void> =>
			await request(
				'/user',
				{
					method: 'PUT',
					body: JSON.stringify({ user }),
				},
				voidType,
				token,
			)

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

		return {
			getAllArticles,
			getFeedArticles,
			getCurrentUser,
			login,
			register,
			saveUser,
			getTags,
		}
	},
)

const tagsResponseCodec = strict({ tags: tagsCodec })
