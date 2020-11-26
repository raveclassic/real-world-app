import { reader } from '../../../../util/reader'
import { App } from '../components/app/app.component'
import { historyService } from '../../../service/history.service'
import { tasksUseCase } from '../../../../domain/use-case/tasks.use-case'

export const AppContainer = reader.combine(
	reader.defer(App, 'historyService', 'tasksUseCase'),
	historyService,
	tasksUseCase,
	(App, historyService, tasksUseCase) => App({ historyService, tasksUseCase }),
)
