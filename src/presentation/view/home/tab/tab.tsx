import { H } from '../../../../util/h'
import { S } from 'sinuous/observable'
import classNames from 'classnames'
import { JSXInternal } from 'sinuous/jsx'
import MouseEventHandler = JSXInternal.MouseEventHandler
import { ElementChildren } from 'sinuous/shared'

export interface YourFeedTabProps {
	readonly isActive: () => boolean
	readonly onClick: () => void
	readonly children: ElementChildren
}

export const Tab = (props: YourFeedTabProps) => {
	const className = S(() =>
		classNames('nav-link', {
			active: props.isActive(),
		}),
	)

	const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
		e.preventDefault()
		!props.isActive() && props.onClick()
	}

	return (
		<li className="nav-item">
			<a href="" className={className} onClick={handleClick}>
				{props.children}
			</a>
		</li>
	)
}
