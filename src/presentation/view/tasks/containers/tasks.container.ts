import { reader } from '../../../../util/reader'
import { newTasksViewModel } from '../../../view-model/tasks.view-model'
import { Tasks } from '../components/tasks/tasks.component'

export const TasksContainer = reader.combine(newTasksViewModel, Tasks, (newTasksViewModel, Tasks) => () => {
	const vm = newTasksViewModel()
	return Tasks({
		tasks: vm.tasks,
		completedCount: vm.completedCount,
		activeCount: vm.activeCount,
		onTaskAdd: vm.addTask,
	})
})
