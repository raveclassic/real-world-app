import { computed } from 'sinuous/observable'
import { h } from 'sinuous'

export interface TaskProps {
	readonly title: () => string
	readonly isCompleted: () => boolean
	readonly isEditing: () => boolean
}

export const Task = (props: TaskProps) => {
	const { title, isCompleted, isEditing } = props

	const todoRootClassName = computed(() => {
		let className = 'todoRoot'
		if (isCompleted()) {
			className += 'completed'
		}
		if (isEditing()) {
			className += 'editing'
		}
		return className
	})

	return (
		<li className={todoRootClassName}>
			<div className={'view'}>
				<input type="checkbox" className={'toggle'} checked={isCompleted} />
				<label>{title}</label>
				<button className={'destroy'} />
			</div>
			<input type="text" value={title} autoFocus={isEditing} className={'edit'} />
		</li>
	)
}
