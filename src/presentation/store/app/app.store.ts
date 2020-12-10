import { Auth, authorized, unauthorized } from '../../../domain/entity/auth/auth.entity'
import { reader } from '../../../util/reader'
import { authService } from '../../../domain/service/auth/auth.service'
import { data } from '../../../util/observable'
import Bluebird from 'bluebird'

export interface AppStore {
	readonly auth: () => Auth
	readonly login: (email: string, password: string) => Bluebird<void>
	readonly register: (email: string, password: string) => Bluebird<void>
	readonly logout: () => void
}

export const appStore = reader.key<AppStore>()('appStore')

export const newAppStore = reader.combine(authService, (authService) => (initialAuth: Auth): AppStore => {
	const auth = data(initialAuth)

	const login = async (email: string, password: string): Bluebird<void> => {
		const user = await authService.login(email, password)
		auth(authorized(user))
	}

	const register = async (email: string, password: string): Bluebird<void> => {
		const user = await authService.register(email, password)
		auth(authorized(user))
	}

	const logout = () => {
		authService.logout()
		auth(unauthorized)
	}

	return {
		auth,
		login,
		register,
		logout,
	}
})
