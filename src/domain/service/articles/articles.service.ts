import Bluebird from 'bluebird'
import { reader } from '../../../util/reader'
import { Articles } from '../../entity/article/article.entity'

export interface ArticlesService {
	readonly getGlobalFeed: () => Bluebird<Articles>
	readonly favouriteArticle: (slug: string) => Bluebird<void>
	readonly unfavouriteArticle: (slug: string) => Bluebird<void>
}

export const articlesService = reader.key<ArticlesService>()('articlesService')
