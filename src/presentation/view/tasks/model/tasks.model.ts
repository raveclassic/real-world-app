export interface Task {
	readonly isCompleted: boolean
	readonly title: string
}

export interface Tasks extends Array<Task> {}
