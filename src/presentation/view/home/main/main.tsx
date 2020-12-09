import { S } from 'sinuous/observable'
import { H } from '../../../../util/h'
import { Tab } from '../tab/tab'
import { MainViewModel } from './main.view-model'
import { constTrue, constVoid } from 'fp-ts/function'

export const Main = (props: MainViewModel) => {
	const isFeedTabActive = S(() => props.tab().kind === 'feed')
	const handleFeedTabClick = () => props.onTabSelect({ kind: 'feed' })

	const isGlobalTabActive = S(() => props.tab().kind === 'global')
	const handleGlobalTabClick = () => props.onTabSelect({ kind: 'global' })

	return (
		<div className="col-md-9">
			<div className="feed-toggle">
				<ul className="nav nav-pills outline-active">
					<Tab isActive={isFeedTabActive} onClick={handleFeedTabClick}>
						Your Feed
					</Tab>
					<Tab isActive={isGlobalTabActive} onClick={handleGlobalTabClick}>
						Global
					</Tab>

					{() => {
						const tab = props.tab()
						if (tab.kind === 'tag') {
							return (
								<Tab isActive={constTrue} onClick={constVoid}>
									<i className="ion-pound" /> {tab.tag}
								</Tab>
							)
						}
					}}
				</ul>
			</div>

			<ArticleList
				pager={props.pager}
				articles={props.articles}
				loading={props.loading}
				articlesCount={props.articlesCount}
				currentPage={props.currentPage}
			/>
		</div>
	)
}
