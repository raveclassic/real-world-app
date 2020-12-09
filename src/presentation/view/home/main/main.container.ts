import { newMainViewModel } from './main.view-model'
import { Main } from './main'

export const MainContainer = () => Main(newMainViewModel())
