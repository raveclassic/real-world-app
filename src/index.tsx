import { render } from 'sinuous/render'
import { H } from './util/h'
import { navigationServiceImpl } from './presentation/service/navigation/navigation.service'
import { createHashHistory } from 'history'
import { authRepositoryImpl } from './data/repository/auth/auth.repository.impl'
import { BootstrapContainer } from './presentation/view/app/bootstrap/bootstrap.container'
import { localDataSourceImpl } from './data/data-source/local/local.data-source.impl'
import { httpDataSourceImpl } from './data/data-source/http/http.data-source.impl'
import { authServiceImpl } from './domain/service/auth/auth.service.impl'
import { tagsServiceImpl } from './domain/service/tags/tags.service.impl'
import { tagsRepositoryImpl } from './data/repository/tags/tags.repository.impl'
import { articlesServiceImpl } from './domain/service/articles/articles.service.impl'
import { articlesRepositoryImpl } from './data/repository/articles/articles.repository.impl'

const root = document.getElementById('root')
const DIContainer = () => {
	const history = createHashHistory()
	const navigationService = navigationServiceImpl({ history })
	const localDataSource = localDataSourceImpl({ window })
	const httpDataSource = httpDataSourceImpl({ window, apiURL: 'https://conduit.productionready.io/api' })
	const authRepository = authRepositoryImpl({ httpDataSource, localDataSource })
	const authService = authServiceImpl({ authRepository })
	const tagsRepository = tagsRepositoryImpl({ httpDataSource })
	const tagsService = tagsServiceImpl({ tagsRepository })
	const articlesRepository = articlesRepositoryImpl({ httpDataSource })
	const articlesService = articlesServiceImpl({ authRepository, articlesRepository })
	const Resolved = BootstrapContainer({ navigationService, authService, tagsService, articlesService })
	return <Resolved />
}
render(DIContainer, root ?? undefined)
