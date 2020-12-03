import { App } from './app'
import { reader } from '../../../../util/reader'
import { newAppModel } from '../../../../domain/model/app/app.model'

export const AppContainer = reader.combine(reader.defer(App, 'appModel'), newAppModel, (getApp, newAppModel) => () => {
	const appModel = newAppModel()
	const App = getApp({ appModel })
	return App()
})
