import { reader } from '../../../../util/reader'
import { data } from '../../../../util/observable'
import { appStore } from '../../../store/app/app.store'
import { autoCancel } from '../../../../util/bluebird'
import Bluebird from 'bluebird'
import { strict } from 'io-ts'
import { LoginErrors, loginErrorsCodec } from '../../../entity/login-errors/login-errors.entity'
import { navigationService } from '../../../service/navigation/navigation.service'
import { homePage } from '../../../entity/page/page.entity'

export interface LoginViewModel {
	readonly email: () => string
	readonly onEmailChange: (value: string) => void

	readonly password: () => string
	readonly onPasswordChange: (value: string) => void

	readonly isInProgress: () => boolean
	readonly lastErrors: () => LoginErrors | undefined

	readonly onSubmit: () => void
}

export const newLoginViewModel = reader.combine(
	appStore,
	navigationService,
	(appStore, navigationService) => (): LoginViewModel => {
		const email = data('')
		const onEmailChange = email

		const password = data('')
		const onPasswordChange = password

		const isInProgress = data(false)
		const lastErrors = data<Record<string, readonly string[]> | undefined>(undefined)

		const onSubmit = autoCancel(
			async (): Bluebird<void> => {
				lastErrors(undefined)
				isInProgress(true)
				try {
					await appStore.login(email(), password())
					const auth = appStore.auth()
					if (auth.kind === 'authorized') {
						navigationService.navigateToPage(homePage)
					}
				} catch (e) {
					if (loginErrorCodec.is(e)) {
						lastErrors(e.errors)
					} else {
						throw e
					}
				} finally {
					isInProgress(false)
				}
			},
		)

		return {
			email,
			onEmailChange,
			password,
			onPasswordChange,
			isInProgress,
			lastErrors,
			onSubmit,
		}
	},
)

const loginErrorCodec = strict({
	errors: loginErrorsCodec,
})
