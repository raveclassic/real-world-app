import { App } from './app'
import { reader } from '../../../../util/reader'
import { newAppStore } from '../../../store/app/app.store'
import { Auth } from '../../../../domain/entity/auth/auth.entity'

export interface AppContainerProps {
	readonly initialAuth: Auth
}

export const AppContainer = reader.combine(
	reader.defer(App, 'appStore'),
	newAppStore,
	(getApp, newAppStore) => (props: AppContainerProps) => {
		const appStore = newAppStore(props.initialAuth)
		const App = getApp({
			appStore,
		})
		return App()
	},
)
