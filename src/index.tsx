import { render } from 'sinuous/render'
import { H } from './util/h'
import { AppContainer } from './presentation/view/app/app/app.container'
import { navigationRepositoryImpl } from './data/repository/navigation/navigation.repository'
import { navigationServiceImpl } from './data/service/navigation/navigation.service'
import { createHashHistory } from 'history'

const root = document.getElementById('root')
const DIContainer = () => {
	const history = createHashHistory()
	const navigationService = navigationServiceImpl({ history })
	const navigationRepository = navigationRepositoryImpl({ navigationService })
	const Resolved = AppContainer({ navigationRepository })
	return <Resolved />
}
render(DIContainer, root ?? undefined)
