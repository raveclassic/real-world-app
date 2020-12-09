export interface FeedHomeTab {
	readonly kind: 'feed'
}

export interface GlobalHomeTab {
	readonly kind: 'global'
}

export interface TagHomeTab {
	readonly kind: 'tag'
	readonly tag: string
}

export type HomeTab = FeedHomeTab | GlobalHomeTab | TagHomeTab
