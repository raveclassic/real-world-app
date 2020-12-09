import Bluebird from 'bluebird'
import { cleanup } from 'sinuous/observable'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const autoCancel = <F extends (...args: readonly any[]) => Bluebird<void>>(fn: F) => {
	let p: Bluebird<void> | undefined = undefined
	cleanup(() => {
		p?.cancel()
		p = undefined
	})
	return (...args: Parameters<F>): void => {
		p?.cancel()
		p = fn(...args).finally(() => (p = undefined))
	}
}

export const track = (fn: () => Bluebird<void>) => {
	const promise = fn()
	cleanup(() => promise.cancel())
}
