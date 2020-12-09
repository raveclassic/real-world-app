import { Bootstrap } from './bootstrap'
import { newBootstrapViewModel } from './bootstrap.view-model'
import { reader } from '../../../../util/reader'

export const BootstrapContainer = reader.combine(
	Bootstrap,
	newBootstrapViewModel,
	(Bootstrap, newBootstrapViewModel) => () => Bootstrap(newBootstrapViewModel()),
)
