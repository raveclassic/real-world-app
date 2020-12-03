import { reader } from '../../../../util/reader'
import { LinkContainer, LinkContainerProps } from '../link/link.container'
import { NavLinkViewModel } from './nav-link.view-model'
import classNames from 'classnames'
import { H } from '../../../../util/h'

export interface NavLinkProps extends NavLinkViewModel, Omit<LinkContainerProps, 'className'> {}

export const NavLink = reader.combine(LinkContainer, (LinkContainer) => (props: NavLinkProps) => {
	const className = () =>
		classNames('nav-link', {
			active: props.isActive(),
		})

	return (
		<LinkContainer page={props.page} className={className}>
			{props.children}
		</LinkContainer>
	)
})
