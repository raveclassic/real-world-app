import { Page } from '../../entity/page/page.entity'
import { reader } from '../../../util/reader'

export interface NavigationRepository {
	readonly page: () => Page | undefined
	readonly navigate: (url: string) => void
	readonly convertPageToUrl: (page: Page) => string
}

/**
 * NavigationRepository dependency
 * @singleton
 */
export const navigationRepository = reader.key<NavigationRepository>()('navigationRepository')
