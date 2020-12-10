import { reader } from '../../../../util/reader'
import { Login } from './login'
import { newLoginViewModel } from './login.view-model'

export const LoginContainer = reader.combine(Login, newLoginViewModel, (Login, newLoginViewModel) => () =>
	Login(newLoginViewModel()),
)
