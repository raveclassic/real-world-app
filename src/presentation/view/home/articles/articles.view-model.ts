import { Articles } from '../../../../domain/entity/article/article.entity'

export interface ArticlesViewModel {
	readonly articles: () => Articles | undefined
}

export const newArticlesViewModel = () => {}
