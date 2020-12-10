import { reader } from '../../../../util/reader'
import { Page } from '../../../entity/page/page.entity'
import { S } from 'sinuous/observable'
import { navigationService } from '../../../service/navigation/navigation.service'

export interface LinkViewModel {
	readonly to: () => string
	readonly navigate: () => void
}

export interface NewLinkViewModelArgs {
	readonly page: () => Page
}

export const newLinkViewModel = reader.combine(
	navigationService,
	(navigationService) => (args: NewLinkViewModelArgs): LinkViewModel => {
		const to = S(() => navigationService.convertPageToUrl(args.page()))
		const navigate = () => navigationService.navigateToUrl(to())
		return {
			to,
			navigate,
		}
	},
)
