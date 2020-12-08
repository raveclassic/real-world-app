import { reader } from '../../../util/reader'
import { Abortable } from '../../../util/abortable'
import { Type } from 'io-ts'

export interface HTTPDataSource {
	readonly getAllArticles: () => Abortable<void>
	readonly getFeedArticles: (token: string) => Abortable<void>
}

export const httpDataSource = reader.key<HTTPDataSource>()('httpDataSource')

export interface WindowLike {
	readonly fetch: typeof window['fetch']
}

export const httpDataSourceImpl = reader.combine(
	reader.key<WindowLike>()('window'),
	reader.key<string>()('apiURL'),
	(window, apiURL): HTTPDataSource => {
		const get = <T>(url: string, codec: Type<T, unknown>): Abortable<void> => async (controller) => {
			const response = await fetch(url, {
				method: 'GET',
				signal: controller.signal,
			})
		}
		const getAllArticles = (): Abortable<void> => {}
		const getFeedArticles = (token): Abortable<void> => async (controller) => {
			const response = fetch('/articles')
		}
	},
)
