import { H } from '../../../../util/h'
import { LoginErrors } from '../../../entity/login-errors/login-errors.entity'

export interface ListErrorsProps {
	readonly errors: LoginErrors
}

export const ListErrors = (props: ListErrorsProps) => (
	<ul className="error-messages">
		{Object.keys(props.errors).map((key) => (
			<li>
				{key} {props.errors[key]}
			</li>
		))}
	</ul>
)
