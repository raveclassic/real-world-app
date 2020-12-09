import { strict, string, Type } from 'io-ts'

export interface User {
	readonly name: string
	readonly image: string
}

export const userCodec: Type<User, unknown> = strict({
	name: string,
	image: string,
})
