import { reader } from '../../../util/reader'
import { localDataSource } from '../../data-source/local/local.data-source'
import { AuthRepository } from '../../../domain/repository/auth/auth.repository'
import { httpDataSource } from '../../data-source/http/http.data-source'

export const authRepositoryImpl = reader.combine(
	localDataSource,
	httpDataSource,
	(localDataSource, httpDataSource): AuthRepository => {
		return {
			deleteToken: localDataSource.deleteToken,
			getToken: localDataSource.getToken,
			saveToken: localDataSource.saveToken,
			login: httpDataSource.login,
			register: httpDataSource.register,
		}
	},
)
