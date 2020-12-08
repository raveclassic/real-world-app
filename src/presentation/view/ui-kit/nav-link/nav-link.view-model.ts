import { Getter } from '../../../../util/observable'
import { reader } from '../../../../util/reader'
import { Page } from '../../../../domain/entity/page/page.entity'
import { navigationService } from '../../../service/navigation/navigation.service'

export interface NavLinkViewModel {
	readonly page: Getter<Page>
	readonly isActive: Getter<boolean>
}

export interface NewLinkViewModelArgs {
	readonly page: Getter<Page>
}

export const newLinkVieModel = reader.combine(
	navigationService,
	(navigationService) => (args: NewLinkViewModelArgs): NavLinkViewModel => {
		const isActive = () =>
			navigationService.convertPageToUrl(navigationService.page()) ===
			navigationService.convertPageToUrl(args.page())
		return {
			...args,
			isActive,
		}
	},
)
