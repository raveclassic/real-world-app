import { HomeTab } from '../../../entity/home-tab/home-tab.entity'
import { data } from '../../../../util/observable'

export interface MainViewModel {
	readonly tab: () => HomeTab
	readonly onTabSelect: (tab: HomeTab) => void
}

export const newMainViewModel = (): MainViewModel => {
	const tab = data<HomeTab>({ kind: 'global' })
	const onTabSelect = tab

	const tag = data<string | undefined>(undefined)

	return {
		tab,
		onTabSelect,
	}
}
