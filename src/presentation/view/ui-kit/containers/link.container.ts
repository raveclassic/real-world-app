import { Link, LinkProps } from '../components/link/link.component'
import { reader } from '../../../../util/reader'
import { newLinkViewModel } from '../../../view-model/link.view-model'

export interface LinkContainerProps extends Omit<LinkProps, 'isActive'> {}

export const LinkContainer = reader.combine(newLinkViewModel, (newLinkViewModel) => (props: LinkContainerProps) => {
	const vm = newLinkViewModel(props.path)
	return Link({
		isActive: vm.isActive,
		label: props.label,
		path: props.path,
	})
})
