import { reader } from '../../../../util/reader'
import { newHomeViewModel } from './home.view-model'
import { Home } from './home'

export const HomeContainer = reader.combine(Home, newHomeViewModel, (Home, newHomeViewModel) => () =>
	Home(newHomeViewModel()),
)
