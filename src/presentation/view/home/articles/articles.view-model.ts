import { Articles } from '../../../../domain/entity/article/article.entity'
import { reader } from '../../../../util/reader'
import { ArticlesService, articlesService } from '../../../../domain/service/articles/articles.service'
import { data } from '../../../../util/observable'
import { track } from '../../../../util/bluebird'
import Bluebird from 'bluebird'
import { HomeTab } from '../../../entity/home-tab/home-tab.entity'

export interface ArticlesViewModel {
	readonly articles: () => Articles | undefined
}

export interface NewArticlesViewModelArgs {
	readonly tab: HomeTab
}

export const newArticlesViewModel = reader.combine(
	articlesService,
	(articlesService) => (args: NewArticlesViewModelArgs): ArticlesViewModel => {
		const articles = data<Articles | undefined>(undefined)

		track(
			async (): Bluebird<void> => {
				articles(await getArticles(articlesService, args.tab))
			},
		)

		return {
			articles,
		}
	},
)

const getArticles = async (service: ArticlesService, tab: HomeTab): Bluebird<Articles> => {
	switch (tab.kind) {
		case 'feed': {
			return await service.getGlobalFeed()
		}
		case 'global': {
			return await service.getGlobalFeed()
		}
		case 'tag': {
			return await service.getGlobalFeed()
		}
	}
}
