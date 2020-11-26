import { data, Getter } from '../../util/observable'
import { History, Location } from 'history'
import { reader } from '../../util/reader'
import { cleanup } from 'sinuous/observable'

export interface HistoryService {
	readonly location: Getter<Location>
}

export const historyService = reader.combine(
	reader.key<History>()('history'),
	(history): HistoryService => {
		const location = data(history.location)
		const subscription = history.listen(location)
		cleanup(subscription)
		return {
			location,
		}
	},
)
