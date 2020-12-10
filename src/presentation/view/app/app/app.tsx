import { H } from '../../../../util/h'
import { reader } from '../../../../util/reader'
import { HeaderContainer } from '../../header/header.container'
import { AppViewModel } from './app.view-model'
import { HomeContainer } from '../../home/home/home.container'
import { LoginContainer } from '../../login/login/login.container'

export const App = reader.combine(
	HeaderContainer,
	HomeContainer,
	LoginContainer,
	(HeaderContainer, HomeContainer, LoginContainer) => (vm: AppViewModel) => (
		<div>
			<HeaderContainer />
			{() => {
				const page = vm.page()
				switch (page.kind) {
					case 'login': {
						return <LoginContainer />
					}
					case 'register': {
						break
					}
					case 'editor': {
						break
					}
					case 'article': {
						break
					}
					case 'profile': {
						break
					}
					case 'favourites': {
						break
					}
					case 'home': {
						return <HomeContainer />
					}
					case 'settings': {
						break
					}
				}
			}}
		</div>
	),
)
