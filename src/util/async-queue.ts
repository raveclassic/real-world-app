import Bluebird from 'bluebird'

export interface AsyncQueue {
	readonly add: (promise: Bluebird<unknown>) => void
	readonly dispose: () => void
}

export const newAsyncQueue = (): AsyncQueue => {
	const set = new Set<Bluebird<unknown>>()

	const add = (promise: Bluebird<unknown>): void => {
		const wrapped = promise.finally(() => set.delete(wrapped))
		set.add(wrapped)
	}

	const dispose = () =>
		set.forEach((promise) => {
			promise.cancel()
			set.delete(promise)
		})

	return {
		add,
		dispose,
	}
}
