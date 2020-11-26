import { TasksRepository } from '../../domain/repository/tasks.repository'
import { reader } from '../../util/reader'

export const todoRepository = reader.combine(
	reader.key<Storage>()('storage'),
	(storage): TasksRepository => {
		return {
			async addTask(todo) {
				return todo
			},
			async getAllTasks() {
				return []
			},
			async checkTask() {},
			async deleteTask() {},
		}
	},
)
