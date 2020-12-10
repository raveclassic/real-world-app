import { ArticlesViewModel } from './articles.view-model'
import { H } from '../../../../util/h'
import { map } from 'sinuous/map'
import { ArticlePreviewContainer } from '../article-preview/article-preview.container'
import { reader } from '../../../../util/reader'

export const Articles = reader.combine(
	ArticlePreviewContainer,
	(ArticlePreviewContainer) => (vm: ArticlesViewModel) => {
		return (
			<>
				{() => {
					const articles = vm.articles()

					if (articles === undefined) {
						return <div className="article-preview">Loading...</div>
					}

					if (articles.articles.length === 0) {
						return <div className="article-preview">No articles are here... yet.</div>
					}

					return (
						<div>
							{map(
								() => articles.articles.slice(),
								(article) => {
									return <ArticlePreviewContainer article={article} />
								},
							)}

							{/*<ListPagination*/}
							{/*	pager={props.pager}*/}
							{/*	articlesCount={props.articlesCount}*/}
							{/*	currentPage={props.currentPage}*/}
							{/*/>*/}
						</div>
					)
				}}
			</>
		)
	},
)
