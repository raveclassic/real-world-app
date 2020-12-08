import { Type } from 'io-ts'
import { reader } from '../../../util/reader'

export interface LocalDataSource {
	readonly getItem: <T>(key: string, codec: Type<T, string>) => Promise<T>
	readonly setItem: <T>(key: string, codec: Type<T, string>) => Promise<void>
}

export const localDataSource = reader.key<LocalDataSource>()('localDataSource')

export interface WindowLike {
	readonly localStorage: Storage
}

export const localDataSourceImpl = reader.combine(
	reader.key<WindowLike>()('window'),
	(window): LocalDataSource => {
		const getItem = <T>(key: string, codec: Type<T, string>): Promise<T> => {
			const current = window.localStorage.getItem(key)
			if (current) {
				try {
					const parsed = JSON.parse()
				}
			}
		}
		const setItem = <T>(key: string, codec: Type<T, string>): Promise<void> => {}
	},
)
