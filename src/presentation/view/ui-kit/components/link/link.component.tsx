import { Getter } from '../../../../../util/observable'
import { h } from 'sinuous'

export interface LinkProps {
	readonly label: Getter<string>
	readonly path: Getter<string>
	readonly isActive: Getter<boolean>
}

export const Link = (props: LinkProps) => {
	const { isActive, label, path } = props
	const className = () => (isActive() ? 'selected' : '')
	return (
		<a href={() => `#${path()}`} className={className}>
			{label}
		</a>
	)
}
