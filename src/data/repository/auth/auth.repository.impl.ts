import { reader } from '../../../util/reader'
import { localDataSource } from '../../data-source/local/local.data-source'
import { AuthRepository } from '../../../domain/repository/auth/auth.repository'
import { httpDataSource } from '../../data-source/http/http.data-source'
import Bluebird from 'bluebird'
import { AuthInfo } from '../../../domain/entity/auth-info/auth-info.entity'

export const authRepositoryImpl = reader.combine(
	localDataSource,
	httpDataSource,
	(localDataSource, httpDataSource): AuthRepository => {
		const login = async (email: string, password: string): Bluebird<AuthInfo> => {
			const info = await httpDataSource.login(email, password)
			localDataSource.saveToken(info.token)
			return info
		}

		const register = async (email: string, password: string): Bluebird<AuthInfo> => {
			const info = await httpDataSource.register(email, password)
			localDataSource.saveToken(info.token)
			return info
		}

		return {
			deleteToken: localDataSource.deleteToken,
			getToken: localDataSource.getToken,
			login,
			register,
		}
	},
)
