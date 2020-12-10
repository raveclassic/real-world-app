import { Article } from '../../../../domain/entity/article/article.entity'
import { reader } from '../../../../util/reader'
import { articlesService } from '../../../../domain/service/articles/articles.service'
import { autoCancel } from '../../../../util/bluebird'
import Bluebird from 'bluebird'
import { data } from '../../../../util/observable'
import { boolean, number, string } from 'io-ts'
import { Tags } from '../../../../domain/entity/tag/tag.entity'
import { Profile } from '../../../../domain/entity/profile/profile.entity'

export interface ArticlePreviewViewModel {
	readonly slug: string
	readonly title: string
	readonly description: string
	readonly body: string
	readonly tagList: Tags
	readonly createdAt: string
	readonly updatedAt: string
	readonly author: Profile
	readonly isFavourited: () => boolean
	readonly favoritesCount: () => number
	readonly toggleFavourite: () => void
}

export interface NewArticlePreviewViewModelArgs {
	readonly article: Article
}

export const newArticlePreviewViewModel = reader.combine(
	articlesService,
	(articlesService) => (args: NewArticlePreviewViewModelArgs): ArticlePreviewViewModel => {
		const article = args.article

		const isFavourited = data(args.article.favorited)
		const favoritesCount = data(args.article.favoritesCount)

		const toggleFavourite = autoCancel(
			async (): Bluebird<void> => {
				if (isFavourited()) {
					// optimistic
					isFavourited(false)
					favoritesCount(favoritesCount() - 1)
					await articlesService.unfavouriteArticle(article.slug)
				} else {
					// optimistic
					isFavourited(true)
					favoritesCount(favoritesCount() + 1)
					await articlesService.favouriteArticle(article.slug)
				}
			},
		)

		return {
			slug: article.slug,
			title: article.title,
			description: article.description,
			body: article.body,
			tagList: article.tagList,
			createdAt: article.createdAt,
			updatedAt: article.updatedAt,
			author: article.author,
			favoritesCount,
			toggleFavourite,
			isFavourited,
		}
	},
)
