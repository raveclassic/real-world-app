import { AuthInfo } from '../auth-info/auth-info.entity'

export interface Unauthorized {
	readonly kind: 'unauthorized'
}
export const unauthorized: Unauthorized = { kind: 'unauthorized' }

export interface Authorized {
	readonly kind: 'authorized'
	readonly info: AuthInfo
}
export const authorized = (info: AuthInfo): Authorized => ({ kind: 'authorized', info })

export type Auth = Unauthorized | Authorized
