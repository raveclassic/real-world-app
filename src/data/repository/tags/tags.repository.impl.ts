import { reader } from '../../../util/reader'
import { httpDataSource } from '../../data-source/http/http.data-source'
import { TagsRepository } from '../../../domain/repository/tags/tags.repository'

export const tagsRepositoryImpl = reader.combine(httpDataSource, (httpDataSource): TagsRepository => httpDataSource)
