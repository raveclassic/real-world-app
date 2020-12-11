import { reader } from '../../../util/reader'
import Bluebird from 'bluebird'
import { AuthInfo } from '../../entity/auth-info/auth-info.entity'

export interface AuthRepository {
	readonly getToken: () => string | undefined
	readonly deleteToken: () => void
	readonly saveToken: (token: string) => void
	readonly login: (email: string, password: string) => Bluebird<AuthInfo>
	readonly register: (email: string, password: string) => Bluebird<AuthInfo>
	readonly getAuthInfo: (token: string) => Bluebird<AuthInfo>
}

export const authRepository = reader.key<AuthRepository>()('authRepository')
