import { boolean, strict, string, Type } from 'io-ts'

export interface Profile {
	readonly username: string
	readonly bio: string
	readonly image: string
	readonly following: boolean
}

export const profileCodec: Type<Profile, unknown> = strict({
	username: string,
	bio: string,
	image: string,
	following: boolean,
})
