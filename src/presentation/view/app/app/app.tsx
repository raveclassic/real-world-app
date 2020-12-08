import { H } from '../../../../util/h'
import { reader } from '../../../../util/reader'
import { HeaderContainer } from '../../header/header.container'

export const App = reader.combine(HeaderContainer, (HeaderContainer) => () => (
	<div>
		<HeaderContainer />
	</div>
))
