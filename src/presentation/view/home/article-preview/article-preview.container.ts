import { reader } from '../../../../util/reader'
import { newArticlePreviewViewModel, NewArticlePreviewViewModelArgs } from './article-preview.view-model'
import { ArticlePreview } from './article-preview'

export const ArticlePreviewContainer = reader.combine(
	newArticlePreviewViewModel,
	ArticlePreview,
	(newArticlePreviewViewModel, ArticlePreview) => (props: NewArticlePreviewViewModelArgs) =>
		ArticlePreview(newArticlePreviewViewModel(props)),
)
