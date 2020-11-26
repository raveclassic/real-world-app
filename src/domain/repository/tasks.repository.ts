import { Task } from '../model/task.model'

export interface TasksRepository {
	readonly getAllTasks: () => Promise<Task[]>
	readonly checkTask: (id: string, value: boolean) => Promise<void>
	readonly addTask: (todo: Task) => Promise<Task>
	readonly deleteTask: (id: string) => Promise<void>
}
