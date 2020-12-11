import { reader } from '../../../util/reader'
import { localDataSource } from '../../data-source/local/local.data-source'
import { AuthRepository } from '../../../domain/repository/auth/auth.repository'
import { httpDataSource } from '../../data-source/http/http.data-source'

export const authRepositoryImpl = reader.combine(
	localDataSource,
	httpDataSource,
	(localDataSource, httpDataSource): AuthRepository => {
		const deleteToken = localDataSource.deleteToken
		const getToken = localDataSource.getToken
		const saveToken = localDataSource.saveToken
		const getAuthInfo = httpDataSource.getCurrentUser
		const login = httpDataSource.login
		const register = httpDataSource.register

		return {
			deleteToken,
			getToken,
			saveToken,
			getAuthInfo,
			login,
			register,
		}
	},
)
