import { Theme } from '../../../ui-kit/components/theme/theme.component'
import { h } from 'sinuous'
import { S } from 'sinuous/observable'

export const Jira = () => {
	S(async () => {
		const response = await fetch('https://jira.in.devexperts.com/rest/api/latest/issue/MREBEL-850', {
			credentials: 'include',
			mode: 'no-cors',
		})
		const content = await response.json()
		console.log(content)
	})

	return (
		<Theme>
			<div>hi</div>
		</Theme>
	)
}
