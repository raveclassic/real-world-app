import { strict, string, Type } from 'io-ts'

export interface User {
	readonly username: string
	readonly image: string
}

export const userCodec: Type<User, unknown> = strict({
	username: string,
	image: string,
})
