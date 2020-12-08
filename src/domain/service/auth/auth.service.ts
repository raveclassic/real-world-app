import { Auth } from '../../entity/auth/auth.entity'
import { Abortable } from '../../../util/abortable'
import { reader } from '../../../util/reader'

export interface AuthService {
	readonly auth: () => Auth
	readonly login: (email: string, password: string) => Abortable<void>
	readonly register: (email: string, password: string) => Abortable<void>
	readonly logout: () => Abortable<void>
}

export const authService = reader.key<AuthService>()('authService')

export const authServiceImpl: AuthService = {}
