import { Auth } from '../../../../domain/entity/auth/auth.entity'
import { reader } from '../../../../util/reader'
import { authService } from '../../../../domain/service/auth/auth.service'
import { data } from '../../../../util/observable'
import { autoCancel } from '../../../../util/bluebird'
import Bluebird from 'bluebird'

export interface BootstrapViewModel {
	readonly initialAuth: () => Auth | undefined // undefined is to track progress
}

export const newBootstrapViewModel = reader.combine(authService, (authService) => (): BootstrapViewModel => {
	const initialAuth = data<Auth | undefined>(undefined)
	const load = autoCancel(
		async (): Bluebird<void> => {
			initialAuth(await authService.getAuth())
		},
	)
	load()

	return {
		initialAuth,
	}
})
