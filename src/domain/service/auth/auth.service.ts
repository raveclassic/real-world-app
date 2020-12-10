import { Auth } from '../../entity/auth/auth.entity'
import { reader } from '../../../util/reader'
import Bluebird from 'bluebird'
import { AuthInfo } from '../../entity/auth-info/auth-info.entity'

export interface AuthService {
	readonly getAuth: () => Bluebird<Auth>
	readonly login: (email: string, password: string) => Bluebird<AuthInfo>
	readonly register: (email: string, password: string) => Bluebird<AuthInfo>
	readonly logout: () => void
}

export const authService = reader.key<AuthService>()('authService')
