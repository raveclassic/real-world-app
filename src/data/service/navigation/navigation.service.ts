import { reader } from '../../../util/reader'
import { history } from '../../entity/history/history.entity'
import { cleanup } from 'sinuous/observable'
import { data } from '../../../util/observable'

export interface NavigationService {
	readonly url: () => string
	readonly push: (url: string) => void
}

export const navigationServiceImpl = reader.combine(
	history,
	(history): NavigationService => {
		const url = data(history.location.pathname)
		const listener = history.listen((update) => url(update.location.pathname))
		cleanup(listener)
		const push = (value: string) => history.push(value)

		return {
			push,
			url,
		}
	},
)
/**
 * NavigationService dependency
 * @singleton
 */
export const navigationService = reader.key<NavigationService>()('navigationService')
