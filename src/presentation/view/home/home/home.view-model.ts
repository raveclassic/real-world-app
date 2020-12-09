import { HomeTab } from '../../../entity/home-tab/home-tab.entity'
import { reader } from '../../../../util/reader'
import { appStore } from '../../../store/app/app.store'
import { S } from 'sinuous/observable'
import { data } from '../../../../util/observable'
import { Tag } from '../../../../domain/entity/tag/tag.entity'

export interface HomeViewModel {
	readonly isAuthorized: () => boolean
	readonly tab: () => HomeTab

	readonly isFeedTabActive: () => boolean
	readonly onFeedTabSelect: () => void

	readonly isGlobalTabActive: () => boolean
	readonly onGlobalTabSelect: () => void

	readonly isTagTabActive: () => boolean
	readonly onTagSelect: (tag: Tag) => void
}

export const newHomeViewModel = reader.combine(appStore, (appStore) => (): HomeViewModel => {
	const isAuthorized = S(() => appStore.auth().kind === 'authorized')

	const tabFromAuth = S((): HomeTab => ({ kind: isAuthorized() ? 'feed' : 'global' }))
	const tab = data<HomeTab>(tabFromAuth())
	const onTabSelect = tab
	S(() => tab(tabFromAuth()))

	const isFeedTabActive = S(() => tab().kind === 'feed')
	const onFeedTabSelect = () => onTabSelect({ kind: 'feed' })

	const isGlobalTabActive = S(() => tab().kind === 'global')
	const onGlobalTabSelect = () => onTabSelect({ kind: 'global' })

	const isTagTabActive = S(() => tab().kind === 'tag')
	const onTagSelect = (tag: Tag) => onTabSelect({ kind: 'tag', tag })

	return {
		isAuthorized,
		tab,
		isFeedTabActive,
		onFeedTabSelect,
		isGlobalTabActive,
		onGlobalTabSelect,
		isTagTabActive,
		onTagSelect,
	}
})
