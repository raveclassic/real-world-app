import { H } from '../../../../util/h'
import { reader } from '../../../../util/reader'
import { LinkContainer } from '../../ui-kit/link/link.container'
import { profilePage } from '../../../../domain/entity/page/page.entity'
import { ArticlePreviewViewModel } from './article-preview.view-model'

export const ArticlePreview = reader.combine(LinkContainer, (LinkContainer) => (vm: ArticlePreviewViewModel) => {
	const article = vm.article
	const favoriteButtonClass = article.favorited ? FAVORITED_CLASS : NOT_FAVORITED_CLASS

	const handleClick = (ev) => {
		ev.preventDefault()
		if (article.favorited) {
			props.unfavorite(article.slug)
		} else {
			props.favorite(article.slug)
		}
	}

	return (
		<div className="article-preview">
			<div className="article-meta">
				<LinkContainer page={() => profilePage(article.author.username)}>
					<img src={article.author.image} alt={article.author.username} />
				</LinkContainer>

				<div className="info">
					<LinkContainer className={() => 'author'} page={() => profilePage(article.author.username)}>
						{article.author.username}
					</LinkContainer>
					<span className="date">{new Date(article.createdAt).toDateString()}</span>
				</div>

				<div className="pull-xs-right">
					<button className={favoriteButtonClass} onClick={handleClick}>
						<i className="ion-heart"></i> {article.favoritesCount}
					</button>
				</div>
			</div>

			<Link to={`/article/${article.slug}`} className="preview-link">
				<h1>{article.title}</h1>
				<p>{article.description}</p>
				<span>Read more...</span>
				<ul className="tag-list">
					{article.tagList.map((tag) => {
						return (
							<li className="tag-default tag-pill tag-outline" key={tag}>
								{tag}
							</li>
						)
					})}
				</ul>
			</Link>
		</div>
	)
})
