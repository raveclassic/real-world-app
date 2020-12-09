import { Tag } from '../../../domain/entity/tag/tag.entity'

export interface FeedHomeTab {
	readonly kind: 'feed'
}

export interface GlobalHomeTab {
	readonly kind: 'global'
}

export interface TagHomeTab {
	readonly kind: 'tag'
	readonly tag: Tag
}

export type HomeTab = FeedHomeTab | GlobalHomeTab | TagHomeTab
