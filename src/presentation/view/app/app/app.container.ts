import { App } from './app'
import { reader } from '../../../../util/reader'
import { newAppStore } from '../../../store/app/app.store'
import { Auth } from '../../../../domain/entity/auth/auth.entity'
import { newAppViewModel } from './app.view-model'

export interface AppContainerProps {
	readonly initialAuth: Auth
}

export const AppContainer = reader.combine(
	reader.defer(App, 'appStore'),
	newAppStore,
	newAppViewModel,
	(getApp, newAppStore, newAppViewModel) => (props: AppContainerProps) => {
		const appStore = newAppStore(props.initialAuth)
		const App = getApp({
			appStore,
		})
		return App(newAppViewModel())
	},
)
