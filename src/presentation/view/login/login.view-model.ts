import { reader } from '../../../util/reader'
import { data } from '../../../util/observable'
import { cleanup } from 'sinuous/observable'
import { authModel } from '../../../domain/model/auth/auth.model'
import { newAbortableController } from '../../../util/abortable'

export interface LoginViewModel {
	readonly email: () => string
	readonly onEmailChange: (value: string) => void

	readonly password: () => string
	readonly onPasswordChange: (value: string) => void

	readonly isInProgress: () => boolean
	readonly lastError: () => Error | undefined

	readonly onSubmit: () => void
}

export const newLoginViewModel = reader.combine(authModel, (authModel) => (): LoginViewModel => {
	const controller = newAbortableController()

	const email = data('')
	const onEmailChange = email

	const password = data('')
	const onPasswordChange = password

	const isInProgress = data(false)
	const lastError = data<Error | undefined>(undefined)

	const onSubmit = async () => {
		lastError(undefined)
		isInProgress(true)
		try {
			await authModel.login(email(), password())(controller)
		} catch (e) {
			lastError(e)
		} finally {
			isInProgress(false)
		}
	}

	cleanup(controller.abort)

	return {
		email,
		onEmailChange,
		password,
		onPasswordChange,
		isInProgress,
		lastError,
		onSubmit,
	}
})
