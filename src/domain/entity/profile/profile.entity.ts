import { boolean, nullType, strict, string, Type, union } from 'io-ts'

export interface Profile {
	readonly username: string
	readonly bio: string | null
	readonly image: string
	readonly following: boolean
}

export const profileCodec: Type<Profile, unknown> = strict({
	username: string,
	bio: union([string, nullType]),
	image: string,
	following: boolean,
})
