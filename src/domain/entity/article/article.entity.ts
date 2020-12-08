import { Profile } from '../profile/profile.entity'

export interface Article {
	readonly slug: string
	readonly title: string
	readonly description: string
	readonly body: string
	readonly tagList: string[]
	readonly createdAt: string
	readonly updatedAt: string
	readonly favorited: boolean
	readonly favoritesCount: number
	readonly author: Profile
}
