import { reader } from '../../../util/reader'
import { NavLinkContainer } from '../ui-kit/nav-link/nav-link.container'
import { LinkContainer } from '../ui-kit/link/link.container'
import { HeaderViewModel } from './header.view-model'
import { H } from '../../../util/h'

export const Header = reader.combine(
	LinkContainer,
	NavLinkContainer,
	(LinkContainer, NavLinkContainer) => (vm: HeaderViewModel) => {
		const { auth } = vm
		return (
			<nav className="navbar navbar-light">
				<div className="container">
					<LinkContainer page={() => ({ kind: 'home' })} className={() => 'navbar-brand'}>
						conduit
					</LinkContainer>

					<ul className="nav navbar-nav pull-xs-right">
						<li className="nav-item">
							<NavLinkContainer page={() => ({ kind: 'home' })}>Home</NavLinkContainer>
						</li>

						{() => {
							const value = auth()
							switch (value.kind) {
								case 'unauthorized': {
									return (
										<>
											<li className="nav-item">
												<NavLinkContainer page={() => ({ kind: 'login' })}>
													Sign in
												</NavLinkContainer>
											</li>

											<li className="nav-item">
												<NavLinkContainer page={() => ({ kind: 'register' })}>
													Sign up
												</NavLinkContainer>
											</li>
										</>
									)
								}
								case 'authorized': {
									return (
										<>
											<li className="nav-item">
												<NavLinkContainer page={() => ({ kind: 'editor' })}>
													<i className="ion-compose" /> New Article
												</NavLinkContainer>
											</li>

											<li className="nav-item">
												<NavLinkContainer page={() => ({ kind: 'settings' })}>
													<i className="ion-gear-a" /> Settings
												</NavLinkContainer>
											</li>

											<li className="nav-item">
												<NavLinkContainer
													page={() => ({ kind: 'profile', username: value.info.username })}>
													<img
														src={value.info.image ?? undefined}
														alt="avatar"
														className="user-pic"
													/>
													{value.info.username}
												</NavLinkContainer>
											</li>
										</>
									)
								}
							}
						}}
					</ul>
				</div>
			</nav>
		)
	},
)
