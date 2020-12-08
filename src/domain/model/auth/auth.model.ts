import { reader } from '../../../util/reader'
import { authenticationRepository } from '../../repository/authentication/authentication.repository'
import { Abortable } from '../../../util/abortable'
import { Getter } from '../../../util/observable'
import { Auth } from '../../entity/auth/auth.entity'

export interface AuthModel {
	readonly login: (email: string, password: string) => Abortable<void>
	readonly register: (email: string, password: string) => Abortable<void>
	readonly logout: () => Abortable<void>
	readonly auth: Getter<Auth>
}

export const newAuthModel = reader.combine(authenticationRepository, (authenticationRepository) => (): AuthModel => {
	const login = authenticationRepository.login
	const register = authenticationRepository.register
	const logout = authenticationRepository.logout
	const auth = authenticationRepository.auth

	return {
		auth,
		login,
		register,
		logout,
	}
})

/**
 * Auth Model
 * @singleton
 */
export const authModel = reader.key<AuthModel>()('authModel')
