import { h } from 'sinuous'
import { JSXInternal } from 'sinuous/jsx'
import KeyboardEventHandler = JSXInternal.KeyboardEventHandler

export interface HeaderProps {
	readonly onTaskAdd: (value: string) => void
}

export const Header = (props: HeaderProps) => {
	const handleNewKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.keyCode === 13) {
			const value = e.currentTarget.value.trim()
			if (value !== '') {
				e.currentTarget.value = ''
				props.onTaskAdd(value)
			}
		}
	}
	return (
		<header className={'header'}>
			<h1 className={'todos'}>todos</h1>
			<input
				type="text"
				className={'new-todo'}
				placeholder={'What needs to be done?'}
				autoFocus={true}
				name={'newTodo'}
				onKeyUp={handleNewKeyUp}
			/>
		</header>
	)
}
