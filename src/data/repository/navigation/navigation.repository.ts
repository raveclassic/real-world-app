import { reader } from '../../../util/reader'
import { NavigationRepository } from '../../../domain/repository/navigation/navigation.repository'
import { Page } from '../../../domain/entity/page/page.entity'
import { navigationService } from '../../service/navigation/navigation.service'

export const navigationRepositoryImpl = reader.combine(
	navigationService,
	(navigationService): NavigationRepository => {
		const navigate = navigationService.push
		const page = () => {
			return parseUrl(navigationService.url())
		}
		return {
			navigate,
			page,
			convertPageToUrl,
		}
	},
)

const parseUrl = (url: string): Page | undefined => {
	if (url === '/login') {
		return { kind: 'login' }
	}
	if (url === '/register') {
		return { kind: 'register' }
	}
	if (url === '/') {
		return { kind: 'home' }
	}
	if (url === '/settings') {
		return { kind: 'settings' }
	}

	return checkEditorPage(url) ?? checkArticlePage(url) ?? checkFavouritesPage(url) ?? checkProfilePage(url)
}

const checkEditorPage = (url: string): Page | undefined => {
	if (url === '/editor') {
		return { kind: 'editor' }
	}
	const match = /^\/editor\/(\w+)$/.exec(url)
	const slug = match?.[1]
	if (slug !== undefined) {
		return { kind: 'editor', slug }
	}
}

const checkArticlePage = (url: string): Page | undefined => {
	const match = /^\/article\/(\w+)$/.exec(url)
	const id = match?.[1]
	if (id !== undefined) {
		return { kind: 'article', id }
	}
}

const checkFavouritesPage = (url: string): Page | undefined => {
	const match = /^\/(\w+)\/favourites$/.exec(url)
	const username = match?.[1]
	if (username !== undefined) {
		return { kind: 'favourites', username }
	}
}

const checkProfilePage = (url: string): Page | undefined => {
	const match = /^\/(\w+)$/.exec(url)
	const username = match?.[1]
	if (username !== undefined) {
		return { kind: 'profile', username }
	}
}

const convertPageToUrl = (page: Page): string => {
	switch (page.kind) {
		case 'login': {
			return '/login'
		}
		case 'register': {
			return '/register'
		}
		case 'editor': {
			return page.slug === undefined ? '/editor' : `/editor/${page.slug}`
		}
		case 'article': {
			return page.id === undefined ? '/article' : `/article/${page.id}`
		}
		case 'profile': {
			return `/${page.username}`
		}
		case 'favourites': {
			return `/${page.username}/favourites`
		}
		case 'home': {
			return '/'
		}
		case 'settings': {
			return '/settings'
		}
	}
}
