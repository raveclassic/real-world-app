import { H } from '../../../../util/h'
import classNames from 'classnames'
import { S } from 'sinuous/observable'
import { JSXInternal } from 'sinuous/jsx'
import MouseEventHandler = JSXInternal.MouseEventHandler

export interface YourFeedTabProps {
	readonly isActive: () => boolean
	readonly onClick: () => void
}

export const YourFeedTab = (props: YourFeedTabProps) => {
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
				Your Feed
			</a>
		</li>
	)
}
