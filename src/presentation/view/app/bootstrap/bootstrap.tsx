import { reader } from '../../../../util/reader'
import { AppContainer } from '../app/app.container'
import { H } from '../../../../util/h'
import { BootstrapViewModel } from './bootstrap.view-model'

export const Bootstrap = reader.combine(AppContainer, (AppContainer) => (vm: BootstrapViewModel) => (
	<>
		{() => {
			const initialAuth = vm.initialAuth()
			return initialAuth === undefined ? <>Loading...</> : <AppContainer initialAuth={initialAuth} />
		}}
	</>
))
