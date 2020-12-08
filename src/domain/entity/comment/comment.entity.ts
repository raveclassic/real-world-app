import { Profile } from '../profile/profile.entity'

export interface Comment {
	readonly id: number
	readonly body: string
	readonly createdAt: string
	readonly author: Profile
}
