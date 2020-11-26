import { h } from 'sinuous'
import { uuid } from '../../../../../util/string'
import { map } from 'sinuous/map'
import { TaskContainer } from '../../containers/task.container'
import { Tasks } from '../../model/tasks.model'
import { Getter } from '../../../../../util/observable'

export interface MainProps {
	readonly tasks: Getter<Tasks>
}

const id = uuid()

export const Main = (props: MainProps) => {
	const { tasks } = props
	const allCompleted = () => tasks().every((task) => task.isCompleted)
	return (
		<section className={'main'}>
			<input type="checkbox" className={'toggle-all'} id={id} checked={allCompleted} />
			<label htmlFor={id}>Mark all as complete</label>
			<ul className={'todo-list'}>{map(tasks, TaskContainer)}</ul>
		</section>
	)
}
