import { reader } from '../../../util/reader'
import { LocalDataSource } from './local.data-source'

const REAL_WORLD_APP_TOKEN_KEY = '@real-world-app//token'

export interface WindowLike {
	readonly localStorage: Storage
}

export const localDataSourceImpl = reader.combine(
	reader.key<WindowLike>()('window'),
	(window): LocalDataSource => {
		const getToken = (): string | undefined => window.localStorage.getItem(REAL_WORLD_APP_TOKEN_KEY) ?? undefined
		const saveToken = (token: string): void => window.localStorage.setItem(REAL_WORLD_APP_TOKEN_KEY, token)
		const deleteToken = (): void => window.localStorage.removeItem(REAL_WORLD_APP_TOKEN_KEY)

		return {
			getToken,
			saveToken,
			deleteToken,
		}
	},
)
