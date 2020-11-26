export interface NonEmptyArray<A> extends ReadonlyArray<A> {
	readonly [0]: A
}
