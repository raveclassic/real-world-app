import { H } from '../../../util/h'
import { reader } from '../../../util/reader'
import { LinkContainer } from '../ui-kit/link/link.container'
import { JSXInternal } from 'sinuous/jsx'
import { LoginViewModel } from './login.view-model'
import GenericEventHandler = JSXInternal.GenericEventHandler

export const Login = reader.combine(LinkContainer, (LinkContainer) => (props: LoginViewModel) => {
	const { email, onEmailChange, password, onPasswordChange, isInProgress, onSubmit } = props

	const handleEmailChange: GenericEventHandler<HTMLInputElement> = (e) => onEmailChange(e.currentTarget.value)
	const handlePasswordChange: GenericEventHandler<HTMLInputElement> = (e) => onPasswordChange(e.currentTarget.value)

	const handleSubmit = (e: Event) => {
		e.preventDefault()
		onSubmit()
	}

	return (
		<div className="auth-page">
			<div className="container page">
				<div className="row">
					<div className="col-md-6 offset-md-3 col-xs-12">
						<h1 className="text-xs-center">Sign In</h1>
						<p className="text-xs-center">
							<LinkContainer page={() => ({ kind: 'register' })}>Need an account?</LinkContainer>
						</p>

						{/*<ListErrors errors={this.props.errors} />*/}

						<form onSubmit={handleSubmit}>
							<fieldset>
								<fieldset className="form-group">
									<input
										className="form-control form-control-lg"
										type="email"
										placeholder="Email"
										value={email}
										onChange={handleEmailChange}
									/>
								</fieldset>

								<fieldset className="form-group">
									<input
										className="form-control form-control-lg"
										type="password"
										placeholder="Password"
										value={password}
										onChange={handlePasswordChange}
									/>
								</fieldset>

								<button
									className="btn btn-lg btn-primary pull-xs-right"
									type="submit"
									disabled={isInProgress}>
									Sign in
								</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
})
