import { Auth } from '../../entity/auth/auth.entity'
import { reader } from '../../../util/reader'

export interface AuthenticationService {
	readonly auth: () => Auth
	readonly login: () => Promise<void>
	readonly logout: () => Promise<void>
}

/**
 * AuthenticationService dependency
 * @singleton
 */
export const authenticationService = reader.key<AuthenticationService>()('authenticationService')
