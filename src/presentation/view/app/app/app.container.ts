import { App } from './app'
import { reader } from '../../../../util/reader'
import { newAuthModel } from '../../../../domain/model/auth/auth.model'

export const AppContainer = reader.combine(
	reader.defer(App, 'authModel'),
	newAuthModel,
	(getApp, newAuthModel) => () => {
		const authModel = newAuthModel()
		const App = getApp({ authModel })
		return App()
	},
)
