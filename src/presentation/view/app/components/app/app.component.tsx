import 'normalize.css'
import { h } from 'sinuous'
import { reader } from '../../../../../util/reader'
import { TasksContainer } from '../../../tasks/containers/tasks.container'
import { glob } from 'goober'

glob`
	body {
		font-family: 'Open Sans';
		font-size: 14px;
	}
`

export const App = reader.combine(TasksContainer, (TasksContainer) => <TasksContainer />)
