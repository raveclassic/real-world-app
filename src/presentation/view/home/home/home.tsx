import { H } from '../../../../util/h'
import { HomeViewModel } from './home.view-model'
import { Tab } from '../tab/tab'
import { constTrue, constVoid } from 'fp-ts/function'
import { Banner } from '../banner/banner'
import { TagsContainer } from '../tags/tags.container'
import { reader } from '../../../../util/reader'

export const Home = reader.combine(TagsContainer, (TagsContainer) => (vm: HomeViewModel) => {
	return (
		<div className="home-page">
			<Banner />
			<div className="container page">
				<div className="row">
					<div className="col-md-9">
						<div className="feed-toggle">
							<ul className="nav nav-pills outline-active">
								<Tab isActive={vm.isFeedTabActive} onClick={vm.onFeedTabSelect}>
									Your Feed
								</Tab>
								<Tab isActive={vm.isGlobalTabActive} onClick={vm.onGlobalTabSelect}>
									Global
								</Tab>

								{() => {
									const tab = vm.tab()
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

						{/*<ArticleList*/}
						{/*	pager={props.pager}*/}
						{/*	articles={props.articles}*/}
						{/*	loading={props.loading}*/}
						{/*	articlesCount={props.articlesCount}*/}
						{/*	currentPage={props.currentPage}*/}
						{/*/>*/}
					</div>

					<div className="col-md-3">
						<div className="sidebar">
							<p>Popular Tags</p>

							<TagsContainer onTagSelect={vm.onTagSelect} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
})
