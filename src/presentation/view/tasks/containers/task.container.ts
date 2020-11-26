import { Task } from '../components/task/task.component'
import { newTaskViewModel } from '../../../view-model/task.view-model'

export interface TaskContainerProps {
	readonly title: string
	readonly isCompleted: boolean
}

export const TaskContainer = (props: TaskContainerProps) => {
	const vm = newTaskViewModel()
	return Task({
		title: () => props.title,
		isEditing: vm.isEditing,
		isCompleted: () => props.isCompleted,
	})
}
