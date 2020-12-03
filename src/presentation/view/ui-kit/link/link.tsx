import { JSXInternal } from 'sinuous/jsx'
import MouseEventHandler = JSXInternal.MouseEventHandler
import { Getter } from '../../../../util/observable'
import { ElementChildren } from 'sinuous/shared'
import { H } from '../../../../util/h'

export interface LinkProps {
	readonly to: () => string
	readonly children: ElementChildren
	readonly className?: Getter<string | undefined>
	readonly onNavigate: () => void
}

export const Link = (props: LinkProps) => {
	const { to, className, onNavigate, children } = props

	const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
		e.preventDefault()
		onNavigate()
	}

	return (
		<a href={to} className={className} onClick={handleClick}>
			{children}
		</a>
	)
}
