import { ArticlesViewModel } from './articles.view-model'
import { H } from '../../../../util/h'
import { map } from 'sinuous/map'

export const Articles = (vm: ArticlesViewModel) => {
	return (
		<>
			{() => {
				const articles = vm.articles()

				if (articles === undefined) {
					return <div className="article-preview">Loading...</div>
				}

				if (articles.length === 0) {
					return <div className="article-preview">No articles are here... yet.</div>
				}

				return (
					<div>
						{map(
							() => articles.slice(),
							(article) => {
								return <ArticlePreview article={article} key={article.slug} />
							},
						)}

						<ListPagination
							pager={props.pager}
							articlesCount={props.articlesCount}
							currentPage={props.currentPage}
						/>
					</div>
				)
			}}
		</>
	)
}
