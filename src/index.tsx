import { TideGauge } from './presentation/view/tide-gauge/tide-gauge.component'

const root = document.getElementById('root')
const render = async () => {
	if (root) {
		root.appendChild(await TideGauge())
	}
}
void render()

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('./service-worker.js')
			.then(() => console.log('[SW] Registered'))
			.catch((e) => console.error('[SW] Registration error', e))
	})
}
