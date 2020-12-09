import { reader } from '../../../util/reader'
import Bluebird from 'bluebird'
import { Articles } from '../../entity/article/article.entity'

export interface ArticlesRepository {
	readonly getAllArticles: () => Bluebird<Articles>
	readonly getFeedArticles: (token: string) => Bluebird<Articles>
	readonly favouriteArticle: (slug: string, token: string) => Bluebird<void>
	readonly unfavouriteArticle: (slug: string, token: string) => Bluebird<void>
}

export const articlesRepository = reader.key<ArticlesRepository>()('articlesRepository')
