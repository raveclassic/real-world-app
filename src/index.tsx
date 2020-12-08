import { render } from 'sinuous/render'
import { H } from './util/h'
import { AppContainer } from './presentation/view/app/app/app.container'
import { navigationServiceImpl } from './presentation/service/navigation/navigation.service'
import { createHashHistory } from 'history'

const root = document.getElementById('root')
const DIContainer = () => {
	const history = createHashHistory()
	const navigationService = navigationServiceImpl({ history })
	const Resolved = AppContainer({ navigationService })
	return <Resolved />
}
render(DIContainer, root ?? undefined)
