import { ArticlesRepository } from '../../../domain/repository/articles/articles.repository'
import { reader } from '../../../util/reader'
import { httpDataSource } from '../../data-source/http/http.data-source'
import { Abortable } from '../../../util/abortable'

export const articlesRepositoryImpl = reader.combine(
	httpDataSource,
	(httpDataSource): ArticlesRepository => {
		const getArticles = (token?: string): Abortable<void> => async (controller) => {
			if (token === undefined) {
				return await httpDataSource.getAllArticles()(controller)
			} else {
				return await httpDataSource.getFeedArticles()(controller)
			}
		}

		return {
			getArticles,
		}
	},
)
