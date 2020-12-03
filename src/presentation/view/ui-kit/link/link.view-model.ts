import { reader } from '../../../../util/reader'
import { appModel } from '../../../../domain/model/app/app.model'
import { Page } from '../../../../domain/entity/page/page.entity'
import { S } from 'sinuous/observable'

export interface LinkViewModel {
	readonly to: () => string
	readonly navigate: () => void
}

export interface NewLinkViewModelArgs {
	readonly page: () => Page
}

export const newLinkViewModel = reader.combine(appModel, (appModel) => (args: NewLinkViewModelArgs): LinkViewModel => {
	const to = S(() => appModel.convertPageToUrl(args.page()))
	const navigate = () => appModel.navigate(to())
	return {
		to,
		navigate,
	}
})
