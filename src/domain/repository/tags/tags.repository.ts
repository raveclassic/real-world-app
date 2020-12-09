import Bluebird from 'bluebird'
import { reader } from '../../../util/reader'
import { Tags } from '../../entity/tag/tag.entity'

export interface TagsRepository {
	readonly getTags: () => Bluebird<Tags>
}

export const tagsRepository = reader.key<TagsRepository>()('tagsRepository')
