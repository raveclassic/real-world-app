import { reader } from '../../../util/reader'
import { authRepository } from '../../repository/auth/auth.repository'
import Bluebird from 'bluebird'
import { Auth, authorized, unauthorized } from '../../entity/auth/auth.entity'
import { AuthService } from './auth.service'
import { AuthInfo } from '../../entity/auth-info/auth-info.entity'

export const authServiceImpl = reader.combine(
	authRepository,
	(authRepository): AuthService => {
		const getAuth = async (): Bluebird<Auth> => {
			const token = authRepository.getToken()
			if (token === undefined) {
				return unauthorized
			}
			const user = await authRepository.getAuthInfo(token)
			return authorized(user)
		}

		const login = async (email: string, password: string): Bluebird<AuthInfo> => {
			const info = await authRepository.login(email, password)
			authRepository.saveToken(info.token)
			return info
		}

		const register = async (email: string, password: string): Bluebird<AuthInfo> => {
			const info = await authRepository.register(email, password)
			authRepository.saveToken(info.token)
			return info
		}

		const logout = () => {
			authRepository.deleteToken()
		}

		return {
			getAuth,
			login,
			register,
			logout,
		}
	},
)
