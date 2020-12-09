import { Auth, authorized, unauthorized } from '../../entity/auth/auth.entity'
import { reader } from '../../../util/reader'
import { authRepository } from '../../repository/auth/auth.repository'
import Bluebird from 'bluebird'
import { userRepository } from '../../repository/user/user.repository'
import { User } from '../../entity/user/user.entity'

export interface AuthService {
	readonly getAuth: () => Bluebird<Auth>
	readonly login: (email: string, password: string) => Bluebird<User>
	readonly register: (email: string, password: string) => Bluebird<User>
	readonly logout: () => void
}

export const authService = reader.key<AuthService>()('authService')

export const authServiceImpl = reader.combine(
	authRepository,
	userRepository,
	(authRepository, userRepository): AuthService => {
		const getAuth = async (): Bluebird<Auth> => {
			const token = authRepository.getToken()
			if (token === undefined) {
				return unauthorized
			}
			const user = await userRepository.getCurrentUser(token)
			return authorized(user)
		}

		const login = authRepository.login
		const register = authRepository.register
		const logout = () => {
			authRepository.deleteToken()
			userRepository.logout()
		}

		return {
			getAuth,
			login,
			register,
			logout,
		}
	},
)
