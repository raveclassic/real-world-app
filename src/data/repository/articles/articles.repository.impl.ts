import { ArticlesRepository } from '../../../domain/repository/articles/articles.repository'
import { reader } from '../../../util/reader'
import { httpDataSource } from '../../data-source/http/http.data-source'

export const articlesRepositoryImpl = reader.combine(
	httpDataSource,
	(httpDataSource): ArticlesRepository => httpDataSource,
)
