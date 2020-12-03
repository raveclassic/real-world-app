export interface LoginPage {
	readonly kind: 'login'
}

export interface RegisterPage {
	readonly kind: 'register'
}

export interface HomePage {
	readonly kind: 'home'
}
export const homePage: HomePage = { kind: 'home' }

export interface SettingsPage {
	readonly kind: 'settings'
}

export interface EditorPage {
	readonly kind: 'editor'
	readonly slug?: string
}

export interface ArticlePage {
	readonly kind: 'article'
	readonly id: string
}

export interface ProfilePage {
	readonly kind: 'profile'
	readonly username: string
}

export interface FavouritesPage {
	readonly kind: 'favourites'
	readonly username: string
}

export type PublicPage = LoginPage | RegisterPage | EditorPage | ArticlePage | ProfilePage | FavouritesPage | HomePage
export type PrivatePage = SettingsPage
export type Page = PublicPage | PrivatePage
