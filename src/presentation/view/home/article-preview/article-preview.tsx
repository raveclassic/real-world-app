import { H } from '../../../../util/h'
import { reader } from '../../../../util/reader'
import { LinkContainer } from '../../ui-kit/link/link.container'
import { articlePage, profilePage } from '../../../entity/page/page.entity'
import { ArticlePreviewViewModel } from './article-preview.view-model'
import { map } from 'sinuous/map'
import classNames from 'classnames'
import { JSXInternal } from 'sinuous/jsx'
import MouseEventHandler = JSXInternal.MouseEventHandler
import { S } from 'sinuous/observable'

export const ArticlePreview = reader.combine(LinkContainer, (LinkContainer) => (vm: ArticlePreviewViewModel) => {
	const favoriteButtonClass = S(() =>
		classNames('btn btn-sm', {
			'btn-primary': vm.isFavourited(),
			'btn-outline-primary': !vm.isFavourited(),
		}),
	)

	const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault()
		vm.toggleFavourite()
	}

	return (
		<div className="article-preview">
			<div className="article-meta">
				<LinkContainer page={() => profilePage(vm.author.username)}>
					<img src={vm.author.image} alt={vm.author.username} />
				</LinkContainer>

				<div className="info">
					<LinkContainer className={() => 'author'} page={() => profilePage(vm.author.username)}>
						{vm.author.username}
					</LinkContainer>
					<span className="date">{new Date(vm.createdAt).toDateString()}</span>
				</div>

				<div className="pull-xs-right">
					<button className={favoriteButtonClass} onClick={handleClick}>
						<i className="ion-heart" /> {vm.favoritesCount}
					</button>
				</div>
			</div>

			<LinkContainer page={() => articlePage(vm.slug)} className={() => 'preview-link'}>
				<h1>{vm.title}</h1>
				<p>{vm.description}</p>
				<span>Read more...</span>
				<ul className="tag-list">
					{map(
						() => vm.tagList.slice(),
						(tag) => (
							<li className="tag-default tag-pill tag-outline">{tag}</li>
						),
					)}
				</ul>
			</LinkContainer>
		</div>
	)
})
