import { reader } from '../../../../util/reader'
import { NavLinkContainer } from '../../ui-kit/nav-link/nav-link.container'
import { LinkContainer } from '../../ui-kit/link/link.container'
import { HeaderViewModel } from './header.view-model'
import { H } from '../../../../util/h'

export const Header = reader.combine(
	LinkContainer,
	NavLinkContainer,
	(LinkContainer, NavLinkContainer) => (vm: HeaderViewModel) => {
		const { auth } = vm
		return (
			<nav className="navbar navbar-light">
				<div className="container">
					<LinkContainer page={() => ({ kind: 'home' })} className={() => 'navbar-brand'}>
						span
					</LinkContainer>
				</div>

				{() =>
					auth().kind === 'unauthorized' && (
						<ul className="nav navbar-nav pull-xs-right">
							<li className="nav-item">
								<NavLinkContainer page={() => ({ kind: 'home' })}>Home</NavLinkContainer>
							</li>

							<li className="nav-item">
								<NavLinkContainer page={() => ({ kind: 'login' })}>
									<i class="ion-compose" />
									Sign in
								</NavLinkContainer>
							</li>

							<li className="nav-item">
								<NavLinkContainer page={() => ({ kind: 'register' })}>
									<i className="ion-compose" />
									Sign up
								</NavLinkContainer>
							</li>
						</ul>
					)
				}

				{() => {
					const value = auth()
					return (
						value.kind === 'authorized' && (
							<ul className="nav navbar-nav pull-xs-right">
								<li className="nav-item">
									<NavLinkContainer page={() => ({ kind: 'home' })}>Home</NavLinkContainer>
								</li>

								<li className="nav-item">
									<NavLinkContainer page={() => ({ kind: 'editor' })}>
										<i className="ion-compose" />
										New Article
									</NavLinkContainer>
								</li>

								<li className="nav-item">
									<NavLinkContainer page={() => ({ kind: 'settings' })}>
										<i className="ion-compose" />
									</NavLinkContainer>
								</li>

								<li className="nav-item">
									<NavLinkContainer page={() => ({ kind: 'profile', username: value.user.name })}>
										<img src={value.user.image} alt="" className="src" />
										<i className="ion-compose" />
									</NavLinkContainer>
								</li>
							</ul>
						)
					)
				}}
			</nav>
		)
	},
)
