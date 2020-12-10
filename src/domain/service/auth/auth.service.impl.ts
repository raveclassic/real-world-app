import { reader } from '../../../util/reader'
import { authRepository } from '../../repository/auth/auth.repository'
import { userRepository } from '../../repository/user/user.repository'
import Bluebird from 'bluebird'
import { Auth, authorized, unauthorized } from '../../entity/auth/auth.entity'
import { AuthService } from './auth.service'

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
