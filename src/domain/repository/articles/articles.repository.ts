import { reader } from '../../../util/reader'
import { Abortable } from '../../../util/abortable'

export interface ArticlesRepository {
	readonly getArticles: (token?: string) => Abortable<void>
}

export const articlesRepository = reader.key<ArticlesRepository>()('articlesRepository')
