import { h } from 'sinuous'
import { Getterify } from '../../../../../util/observable'
import { LinkContainer } from '../../../ui-kit/containers/link.container'
import { reader } from '../../../../../util/reader'

export interface FooterProps {
	readonly activeCount: number
	readonly completedCount: number
}

export const Footer = reader.combine(LinkContainer, (LinkContainer) => (props: Getterify<FooterProps>) => {
	const { activeCount, completedCount } = props
	return (
		<footer className={'footer'}>
			<span className={'todo-count'}>
				<strong>{activeCount}</strong> item{() => (props.activeCount() !== 1 ? 's' : '')} left
			</span>
			<ul className={'filters'}>
				<li>
					<LinkContainer label={() => 'All'} path={() => '/'} />
				</li>
				<li>
					<LinkContainer label={() => 'Active'} path={() => '/active'} />
				</li>
				<li>
					<LinkContainer label={() => 'Completed'} path={() => '/completed'} />
				</li>
			</ul>
			{() => completedCount() > 0 && <button className={'clear-completed'}>Clear completed</button>}
		</footer>
	)
})
