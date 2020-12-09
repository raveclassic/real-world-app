import { reader } from '../../../util/reader'
import { tagsRepository } from '../../repository/tags/tags.repository'
import { TagsService } from './tags.service'

export const tagsServiceImpl = reader.combine(tagsRepository, (tagsRepository): TagsService => tagsRepository)
