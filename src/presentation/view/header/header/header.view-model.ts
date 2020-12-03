import { Getter } from '../../../../util/observable'
import { reader } from '../../../../util/reader'
import { appModel } from '../../../../domain/model/app/app.model'
import { Auth } from '../../../../domain/entity/auth/auth.entity'

export interface HeaderViewModel {
	readonly auth: Getter<Auth>
}

export const newHeaderViewModel = reader.combine(appModel, (appStore) => (): HeaderViewModel => appStore)
