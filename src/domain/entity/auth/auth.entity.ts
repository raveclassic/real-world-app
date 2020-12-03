import { User } from '../user/user.entity'

export interface Unauthorized {
	readonly kind: 'unauthorized'
}
export const unauthorized: Unauthorized = { kind: 'unauthorized' }

export interface Authorized {
	readonly kind: 'authorized'
	readonly user: User
}
export const authorized = (user: User): Authorized => ({ kind: 'authorized', user })

export type Auth = Unauthorized | Authorized
