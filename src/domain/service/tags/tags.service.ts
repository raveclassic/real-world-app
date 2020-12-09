import Bluebird from 'bluebird'
import { Tags } from '../../entity/tag/tag.entity'
import { reader } from '../../../util/reader'

export interface TagsService {
	readonly getTags: () => Bluebird<Tags>
}

export const tagsService = reader.key<TagsService>()('tagsService')
