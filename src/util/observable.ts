import { Observable, sample } from 'sinuous/observable'
import { observable } from 'sinuous'

export interface Getter<A> {
	(): A
}

export type Getterify<P extends object> = { [K in keyof P]: Getter<P[K]> }
export type Observify<P extends object> = { [K in keyof P]: Observable<P[K]> }

export const data = <A>(a: A): Observable<A> => {
	const value = observable(a)
	return (...args: A[]) => {
		if (args.length === 0) {
			return value()
		} else {
			const next = args[0]
			return sample(value) !== next ? value(next) : next
		}
	}
}
