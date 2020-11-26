import { h } from 'sinuous'
import { Theme } from '../ui-kit/components/theme/theme.component'

const url = 'http://tidegauge.ru/tide-gauge/auth/login'

export const TideGauge = async () => {
	const r = await fetch(url)
	return (
		<Theme>
			<iframe src={url} />
		</Theme>
	)
}
