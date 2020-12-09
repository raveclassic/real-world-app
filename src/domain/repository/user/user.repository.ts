import Bluebird from 'bluebird'
import { User } from '../../entity/user/user.entity'
import { reader } from '../../../util/reader'

export interface UserRepository {
	readonly getCurrentUser: (token: string) => Bluebird<User>
	readonly logout: () => void
}

export const userRepository = reader.key<UserRepository>()('userRepository')
