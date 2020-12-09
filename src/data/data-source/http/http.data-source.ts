import { reader } from '../../../util/reader'
import Bluebird from 'bluebird'
import { Articles } from '../../../domain/entity/article/article.entity'
import { User } from '../../../domain/entity/user/user.entity'
import { Tags } from '../../../domain/entity/tag/tag.entity'

export interface HTTPDataSource {
	readonly getAllArticles: () => Bluebird<Articles>
	readonly getFeedArticles: (token: string) => Bluebird<Articles>
	readonly getCurrentUser: (token: string) => Bluebird<User>
	readonly login: (email: string, password: string) => Bluebird<User>
	readonly register: (email: string, password: string) => Bluebird<User>
	readonly saveUser: (user: User, token: string) => Bluebird<void>
	readonly getTags: () => Bluebird<Tags>
	readonly favouriteArticle: (slug: string, token: string) => Bluebird<void>
	readonly unfavouriteArticle: (slug: string, token: string) => Bluebird<void>
}

export const httpDataSource = reader.key<HTTPDataSource>()('httpDataSource')
