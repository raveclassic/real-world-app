import Bluebird from 'bluebird'
import { reader } from '../../../util/reader'
import { AuthInfo } from '../../entity/auth-info/auth-info.entity'

export interface UserRepository {
	readonly getCurrentUser: (token: string) => Bluebird<AuthInfo>
	readonly logout: () => void
}

export const userRepository = reader.key<UserRepository>()('userRepository')
