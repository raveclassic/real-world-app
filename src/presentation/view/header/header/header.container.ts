import { newHeaderViewModel } from './header.view-model'
import { reader } from '../../../../util/reader'
import { Header } from './header'

export const HeaderContainer = reader.combine(newHeaderViewModel, Header, (newHeaderViewModel, Header) => () =>
	Header(newHeaderViewModel()),
)
