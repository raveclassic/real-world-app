import { Getter } from '../../util/observable'
import { reader } from '../../util/reader'
import { historyService, HistoryService } from '../service/history.service'
import { computed } from 'sinuous/observable'

export interface LinkViewModel {
	readonly isActive: Getter<boolean>
}

export interface NewLinkViewModel {
	(path: Getter<string>): LinkViewModel
}

export const newLinkViewModel = reader.combine(
	reader.key<HistoryService>()('historyService'),
	(historyService): NewLinkViewModel => (path) => {
		const isActive = computed(() => historyService.location().pathname === path())
		return {
			isActive,
		}
	},
)
