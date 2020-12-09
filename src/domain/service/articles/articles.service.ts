import Bluebird from 'bluebird'
import { reader } from '../../../util/reader'

export interface ArticlesService {
	readonly favouriteArticle: (slug: string) => Bluebird<void>
	readonly unfavouriteArticle: (slug: string) => Bluebird<void>
}

export const articlesService = reader.key<ArticlesService>()('articlesService')
