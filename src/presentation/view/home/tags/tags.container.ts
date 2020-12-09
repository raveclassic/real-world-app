import { reader } from '../../../../util/reader'
import { Tags } from './tags'
import { newTagsViewModel, NewTagsViewModelArgs } from './tags.view-model'

export const TagsContainer = reader.combine(newTagsViewModel, (newTagsViewModel) => (args: NewTagsViewModelArgs) =>
	Tags(newTagsViewModel(args)),
)
