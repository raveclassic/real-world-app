import { Article } from '../../../../domain/entity/article/article.entity'
import { reader } from '../../../../util/reader'
import { articlesService } from '../../../../domain/service/articles/articles.service'
import { autoCancel } from '../../../../util/bluebird'
import Bluebird from 'bluebird'

export interface ArticlePreviewViewModel {
	readonly article: Article
	readonly toggleFavourite: () => void
}

export interface NewArticlePreviewViewModelArgs {
	readonly article: Article
}

export const newArticlePreviewViewModel = reader.combine(
	articlesService,
	(articlesService) => (args: NewArticlePreviewViewModelArgs): ArticlePreviewViewModel => {
		const article = args.article

		const favourite = autoCancel(
			async (): Bluebird<void> => {
				await articlesService.favouriteArticle(article.slug)
			},
		)

		const toggleFavourite = autoCancel(
			async (): Bluebird<void> => {
				await articlesService.unfavouriteArticle(article.slug)
			},
		)

		return {
			article,
			favourite,
			unfavourite,
		}
	},
)
