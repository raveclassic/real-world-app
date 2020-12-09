import { render } from 'sinuous/render'
import { H } from './util/h'
import { navigationServiceImpl } from './presentation/service/navigation/navigation.service'
import { createHashHistory } from 'history'
import { authServiceImpl } from './domain/service/auth/auth.service'
import { authRepositoryImpl } from './data/repository/auth/auth.repository.impl'
import { userRepositoryImpl } from './data/repository/user/user.repository.impl'
import { BootstrapContainer } from './presentation/view/app/bootstrap/bootstrap.container'
import { localDataSourceImpl } from './data/data-source/local/local.data-source.impl'
import { httpDataSourceImpl } from './data/data-source/http/http.data-source.impl'

const root = document.getElementById('root')
const DIContainer = () => {
	const history = createHashHistory()
	const navigationService = navigationServiceImpl({ history })
	const localDataSource = localDataSourceImpl({ window })
	const httpDataSource = httpDataSourceImpl({ window, apiURL: 'https://conduit.productionready.io/api' })
	const authRepository = authRepositoryImpl({ httpDataSource, localDataSource })
	const userRepository = userRepositoryImpl({ httpDataSource })
	const authService = authServiceImpl({ authRepository, userRepository })
	const Resolved = BootstrapContainer({ navigationService, authService })
	return <Resolved />
}
render(DIContainer, root ?? undefined)
