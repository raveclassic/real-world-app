export interface AbortController {
	readonly signal: AbortSignal
	readonly abort: () => void
}

export interface Abortable<T> {
	(controller: AbortController): Promise<T>
}

export const newAbortableController = (): AbortController => {
	const controller = new AbortController()
	return {
		signal: controller.signal,
		abort: () => controller.abort(),
	}
}
