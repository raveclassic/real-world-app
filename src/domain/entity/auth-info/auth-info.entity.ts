import { nullType, number, strict, string, Type, union } from 'io-ts'
import { DateFromISOString } from 'io-ts-types/DateFromISOString'

export interface AuthInfo {
	readonly id: number
	readonly email: string
	readonly createdAt: Date
	readonly updatedAt: Date
	readonly username: string
	readonly bio: string | null
	readonly image: string | null
	readonly token: string
}

export const authInfoCodec: Type<AuthInfo, unknown> = strict({
	id: number,
	email: string,
	createdAt: DateFromISOString,
	updatedAt: DateFromISOString,
	username: string,
	bio: union([string, nullType]),
	image: union([string, nullType]),
	token: string,
})
