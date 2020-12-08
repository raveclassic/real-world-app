import { Getter } from '../../../util/observable'
import { reader } from '../../../util/reader'
import { Auth } from '../../../domain/entity/auth/auth.entity'
import { authModel } from '../../../domain/model/auth/auth.model'

export interface HeaderViewModel {
	readonly auth: Getter<Auth>
}

export const newHeaderViewModel = reader.combine(authModel, (authModel) => (): HeaderViewModel => authModel)
