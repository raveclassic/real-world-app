import { reader } from '../../../util/reader'

export interface LocalDataSource {
	readonly getToken: () => string | undefined
	readonly saveToken: (token: string) => void
	readonly deleteToken: () => void
}

export const localDataSource = reader.key<LocalDataSource>()('localDataSource')
