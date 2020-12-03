import { NavLink, NavLinkProps } from './nav-link'
import { newLinkVieModel, NewLinkViewModelArgs } from './nav-link.view-model'
import { reader } from '../../../../util/reader'

export interface NavLinkContainerProps extends Omit<NavLinkProps, 'isActive'>, NewLinkViewModelArgs {}

export const NavLinkContainer = reader.combine(
	NavLink,
	newLinkVieModel,
	(NavLink, newLinkVieModel) => (props: NavLinkContainerProps) => NavLink({ ...props, ...newLinkVieModel(props) }),
)
