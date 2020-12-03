import { Getter } from '../../../../util/observable'
import { reader } from '../../../../util/reader'
import { appModel } from '../../../../domain/model/app/app.model'
import { Page } from '../../../../domain/entity/page/page.entity'

export interface NavLinkViewModel {
	readonly page: Getter<Page>
	readonly isActive: Getter<boolean>
}

export interface NewLinkViewModelArgs {
	readonly page: Getter<Page>
}

export const newLinkVieModel = reader.combine(
	appModel,
	(appStore) => (args: NewLinkViewModelArgs): NavLinkViewModel => {
		const isActive = () => {
			return appStore.convertPageToUrl(appStore.page()) === appStore.convertPageToUrl(args.page())
		}
		return {
			...args,
			isActive,
		}
	},
)
