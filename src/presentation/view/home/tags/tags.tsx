import { H } from '../../../../util/h'
import { TagsViewModel } from './tags.view-model'
import { JSXInternal } from 'sinuous/jsx'
import MouseEventHandler = JSXInternal.MouseEventHandler
import { map } from 'sinuous/map'

export const Tags = (vm: TagsViewModel) => (
	<>
		{() => {
			const tags = vm.tags()
			if (tags) {
				return (
					<div className="tag-list">
						{map(
							() => tags.slice(),
							(tag) => {
								const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
									e.preventDefault()
									vm.onTagSelect(tag)
								}

								return (
									<a href="" className="tag-default tag-pill" onClick={handleClick}>
										{tag}
									</a>
								)
							},
						)}
					</div>
				)
			} else {
				return <div>Loading Tags...</div>
			}
		}}
	</>
)
