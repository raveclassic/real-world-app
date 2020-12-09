import { reader } from '../../../../util/reader'
import { navigationService } from '../../../service/navigation/navigation.service'
import { Page } from '../../../../domain/entity/page/page.entity'

export interface AppViewModel {
	readonly page: () => Page
}

export const newAppViewModel = reader.combine(navigationService, (navigationService) => (): AppViewModel =>
	navigationService,
)
