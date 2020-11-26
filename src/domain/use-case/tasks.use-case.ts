import { Task } from '../model/task.model'
import { reader } from '../../util/reader'
import { TasksRepository } from '../repository/tasks.repository'
import { uuid } from '../../util/string'

export interface TasksUseCase {
	readonly getAllTasks: () => Promise<Task[]>
	readonly checkTask: (id: string, value: boolean) => Promise<void>
	readonly createTask: (title: string) => Promise<Task>
	readonly deleteTask: (id: string) => Promise<void>
}

export const tasksUseCase = reader.combine(
	reader.key<TasksRepository>()('tasksRepository'),
	(todoRepository): TasksUseCase => {
		return {
			checkTask: todoRepository.checkTask,
			getAllTasks: todoRepository.getAllTasks,
			createTask: (title) =>
				todoRepository.addTask({
					id: uuid(),
					isCompleted: false,
					title,
				}),
			deleteTask: todoRepository.deleteTask,
		}
	},
)
