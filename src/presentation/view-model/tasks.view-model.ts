import { reader } from '../../util/reader'
import { TasksUseCase } from '../../domain/use-case/tasks.use-case'
import { data, Getter } from '../../util/observable'
import { Task } from '../../domain/model/task.model'
import { computed } from 'sinuous/observable'

export interface TasksViewModelState {
	readonly isAdding: boolean
	readonly tasks: Task[]
}

export interface TasksViewModel {
	readonly activeCount: Getter<number>
	readonly completedCount: Getter<number>
	readonly isAdding: Getter<boolean>
	readonly tasks: Getter<Task[]>
	readonly addTask: (title: string) => Promise<void>
	readonly deleteTask: (id: string) => Promise<void>
	readonly checkTask: (id: string, isChecked: boolean) => Promise<void>
}

export interface NewTasksViewModel {
	(): TasksViewModel
}

export const newTasksViewModel = reader.combine(
	reader.key<TasksUseCase>()('tasksUseCase'),
	(tasksUseCase): NewTasksViewModel => {
		return () => {
			const state = data<TasksViewModelState>({
				isAdding: false,
				tasks: [],
			})

			const addTask = async (title: string) => {
				state({ ...state(), isAdding: true })
				const task = await tasksUseCase.createTask(title)
				const previous = state()
				state({ ...previous, isAdding: false, tasks: previous.tasks.concat(task) })
			}

			const deleteTask = async (id: string) => {
				const previous = state()
				state({ ...previous, tasks: previous.tasks.filter((task) => task.id !== id) })
				await tasksUseCase.deleteTask(id)
			}

			const checkTask = async (id: string, isChecked: boolean) => {
				const previous = state()
				state({
					...previous,
					tasks: previous.tasks.map((task) => (task.id === id ? { ...task, isChecked } : task)),
				})
				await tasksUseCase.checkTask(id, isChecked)
			}

			const tasks = computed(() => state().tasks)
			const completedCount = computed(() => tasks().filter((task) => task.isCompleted).length)
			const activeCount = computed(() => tasks().length - completedCount())
			const isAdding = computed(() => state().isAdding)

			return {
				addTask,
				deleteTask,
				checkTask,
				completedCount,
				activeCount,
				isAdding,
				tasks,
			}
		}
	},
)
