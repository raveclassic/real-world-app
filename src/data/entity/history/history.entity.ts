import { reader } from '../../../util/reader'
import { History } from 'history'

export const history = reader.key<History>()('history')
