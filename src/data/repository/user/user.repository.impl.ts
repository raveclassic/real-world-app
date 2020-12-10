import { UserRepository } from '../../../domain/repository/user/user.repository'
import { reader } from '../../../util/reader'
import { httpDataSource } from '../../data-source/http/http.data-source'
import Bluebird from 'bluebird'
import { AuthInfo } from '../../../domain/entity/auth-info/auth-info.entity'

export const userRepositoryImpl = reader.combine(
	httpDataSource,
	(httpDataSource): UserRepository => {
		let currentUser: AuthInfo | undefined = undefined
		const getCurrentUser = async (token: string): Bluebird<AuthInfo> => {
			if (!currentUser) {
				currentUser = await httpDataSource.getCurrentUser(token)
			}
			return currentUser
		}
		const logout = () => {
			currentUser = undefined
		}
		return {
			getCurrentUser,
			logout,
		}
	},
)
