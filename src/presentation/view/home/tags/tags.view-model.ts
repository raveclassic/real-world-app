import { reader } from '../../../../util/reader'
import { tagsService } from '../../../../domain/service/tags/tags.service'
import { Tag, Tags } from '../../../../domain/entity/tag/tag.entity'
import { data } from '../../../../util/observable'
import { track } from '../../../../util/bluebird'
import Bluebird from 'bluebird'

export interface TagsViewModel {
	readonly tags: () => Tags | undefined
	readonly onTagSelect: (tag: Tag) => void
}

export interface NewTagsViewModelArgs {
	readonly onTagSelect: (tag: Tag) => void
}

export const newTagsViewModel = reader.combine(
	tagsService,
	(tagsService) => (args: NewTagsViewModelArgs): TagsViewModel => {
		const tags = data<Tags | undefined>(undefined)
		track(
			async (): Bluebird<void> => {
				tags(await tagsService.getTags())
			},
		)

		const onTagSelect = args.onTagSelect

		return {
			tags,
			onTagSelect,
		}
	},
)
