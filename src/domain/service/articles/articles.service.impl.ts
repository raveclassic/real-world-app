import { reader } from '../../../util/reader'
import { articlesRepository } from '../../repository/articles/articles.repository'
import { ArticlesService } from './articles.service'
import { authRepository } from '../../repository/auth/auth.repository'
import Bluebird from 'bluebird'

export const articlesServiceImpl = reader.combine(
	articlesRepository,
	authRepository,
	(articlesRepository, authRepository): ArticlesService => {
		const favouriteArticle = async (slug: string): Bluebird<void> => {
			const token = authRepository.getToken()
			if (token !== undefined) {
				await articlesRepository.favouriteArticle(slug, token)
			}
		}

		const unfavouriteArticle = async (slug: string): Bluebird<void> => {
			const token = authRepository.getToken()
			if (token !== undefined) {
				await articlesRepository.unfavouriteArticle(slug, token)
			}
		}

		return {
			favouriteArticle,
			unfavouriteArticle,
		}
	},
)
