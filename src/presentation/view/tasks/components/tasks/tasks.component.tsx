import { reader } from '../../../../../util/reader'
import { Footer } from '../footer/footer.component'
import { Header } from '../header/header.component'
import { h } from 'sinuous'
import { Main } from '../main/main.component'
import { Getter } from '../../../../../util/observable'
import { Tasks as TasksType } from '../../model/tasks.model'

export interface TasksProps {
	readonly tasks: Getter<TasksType>
	readonly onTaskAdd: (title: string) => void
	readonly activeCount: Getter<number>
	readonly completedCount: Getter<number>
}

export const Tasks = reader.combine(Footer, (Footer) => (props: TasksProps) => {
	const { tasks, onTaskAdd, activeCount, completedCount } = props
	return (
		<div className={'todoapp'}>
			<Header onTaskAdd={onTaskAdd} />
			<Main tasks={tasks} />
			<Footer activeCount={activeCount} completedCount={completedCount} />
		</div>
	)
})
