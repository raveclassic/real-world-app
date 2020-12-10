import { reader } from '../../../../util/reader'
import { newArticlesViewModel, NewArticlesViewModelArgs } from './articles.view-model'
import { Articles } from './articles'

export const ArticlesContainer = reader.combine(
	newArticlesViewModel,
	Articles,
	(newArticlesViewModel, Articles) => (props: NewArticlesViewModelArgs) => Articles(newArticlesViewModel(props)),
)
