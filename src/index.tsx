console.log('foo22')

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('./service-worker.js')
			.then(() => console.log('[SW] Registered'))
			.catch((e) => console.error('[SW] Registration error', e))
	})
}
