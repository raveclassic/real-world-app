import { reader } from '../../../util/reader'
import Bluebird from 'bluebird'
import { User } from '../../entity/user/user.entity'

export interface AuthRepository {
	readonly getToken: () => string | undefined
	readonly saveToken: (token: string) => void
	readonly deleteToken: () => void
	readonly login: (email: string, password: string) => Bluebird<User>
	readonly register: (email: string, password: string) => Bluebird<User>
}

export const authRepository = reader.key<AuthRepository>()('authRepository')
