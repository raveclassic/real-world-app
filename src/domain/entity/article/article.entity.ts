import { Profile, profileCodec } from '../profile/profile.entity'
import { boolean, number, readonlyArray, strict, string, Type } from 'io-ts'

export interface Article {
	readonly slug: string
	readonly title: string
	readonly description: string
	readonly body: string
	readonly tagList: readonly string[]
	readonly createdAt: string
	readonly updatedAt: string
	readonly favorited: boolean
	readonly favoritesCount: number
	readonly author: Profile
}

export const articleCodec: Type<Article, unknown> = strict({
	slug: string,
	title: string,
	description: string,
	body: string,
	tagList: readonlyArray(string),
	createdAt: string,
	updatedAt: string,
	favorited: boolean,
	favoritesCount: number,
	author: profileCodec,
})

export interface Articles extends ReadonlyArray<Article> {}

export const articlesCodec: Type<Articles, unknown> = readonlyArray(articleCodec)
