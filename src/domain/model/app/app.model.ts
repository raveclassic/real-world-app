import { homePage, Page } from '../../entity/page/page.entity'
import { data, Getter } from '../../../util/observable'
import { reader } from '../../../util/reader'
import { Auth, authorized, unauthorized } from '../../entity/auth/auth.entity'
import { navigationRepository } from '../../repository/navigation/navigation.repository'
import { S } from 'sinuous/observable'

export interface AppModel {
	readonly page: Getter<Page>
	readonly navigate: (url: string) => void
	readonly convertPageToUrl: (page: Page) => string
	readonly auth: Getter<Auth>
}

export const newAppModel = reader.combine(navigationRepository, (navigationRepository) => (): AppModel => {
	const page = S(
		(): Page => {
			const currentPage = navigationRepository.page()
			if (currentPage === undefined) {
				navigationRepository.navigate(navigationRepository.convertPageToUrl(homePage))
				return homePage
			}
			return currentPage
		},
	)
	const navigate = navigationRepository.navigate
	const auth = data<Auth>(
		authorized({
			image: 'foo',
			name: 'foo',
		}),
	)
	Object.assign(window, {
		toggle: () => {
			if (auth().kind === 'authorized') {
				auth(unauthorized)
			} else {
				auth(
					authorized({
						image: 'foo',
						name: 'foo',
					}),
				)
			}
		},
		change(name: string) {
			auth(
				authorized({
					image: 'foo',
					name,
				}),
			)
		},
	})
	const convertPageToUrl = navigationRepository.convertPageToUrl
	return {
		page,
		navigate,
		auth,
		convertPageToUrl,
	}
})

/**
 * App Model
 * @singleton
 */
export const appModel = reader.key<AppModel>()('appModel')
