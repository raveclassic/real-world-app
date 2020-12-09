import { reader } from '../../../util/reader'
import { Auth } from '../../../domain/entity/auth/auth.entity'
import { appStore } from '../../store/app/app.store'

export interface HeaderViewModel {
	readonly auth: () => Auth
}

export const newHeaderViewModel = reader.combine(appStore, (appStore) => (): HeaderViewModel => appStore)
