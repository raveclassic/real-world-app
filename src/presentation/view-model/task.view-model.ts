import { data, Getter } from '../../util/observable'

export interface TaskViewModel {
	readonly isEditing: Getter<boolean>
	readonly toggleEditing: (value: boolean) => void
}

export interface NewTaskViewModel {
	(): TaskViewModel
}

export const newTaskViewModel: NewTaskViewModel = () => {
	const isEditing = data(false)

	return {
		isEditing,
		toggleEditing: isEditing,
	}
}
