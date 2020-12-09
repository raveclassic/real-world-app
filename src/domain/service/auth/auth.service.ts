import { Auth } from '../../entity/auth/auth.entity'
import { reader } from '../../../util/reader'
import Bluebird from 'bluebird'
import { User } from '../../entity/user/user.entity'

export interface AuthService {
	readonly getAuth: () => Bluebird<Auth>
	readonly login: (email: string, password: string) => Bluebird<User>
	readonly register: (email: string, password: string) => Bluebird<User>
	readonly logout: () => void
}

export const authService = reader.key<AuthService>()('authService')
