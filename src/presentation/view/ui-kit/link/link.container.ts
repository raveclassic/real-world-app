import { reader } from '../../../../util/reader'
import { newLinkViewModel, NewLinkViewModelArgs } from './link.view-model'
import { Link, LinkProps } from './link'

export interface LinkContainerProps extends Omit<LinkProps, 'onNavigate' | 'to'>, NewLinkViewModelArgs {}

export const LinkContainer = reader.combine(newLinkViewModel, (newLinkViewModel) => (props: LinkContainerProps) => {
	const vm = newLinkViewModel(props)
	return Link({ ...props, ...vm, onNavigate: vm.navigate })
})
