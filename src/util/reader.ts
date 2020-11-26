import { NonEmptyArray } from './nea'

export interface Reader<E, A> {
	(e: E): A
}

export type ToReadersArray<A extends NonEmptyArray<unknown>> = {
	[K in keyof A]: Reader<unknown, A[K]>
}

export type ProjectMany<A, R> = (...args: A[]) => R

export type Clean<O> = { [K in keyof O]: O[K] }

function combine<E, A, R>(a: Reader<E, A>, project: (a: A) => R): Reader<E, R>
function combine<EA, A, EB, B, R>(
	a: Reader<EA, A>,
	b: Reader<EB, B>,
	project: (a: A, b: B) => R,
): Reader<{ [P in keyof (EA & EB)]: (EA & EB)[P] }, R>
function combine<EA, A, EB, B, EC, C, R>(
	a: Reader<EA, A>,
	b: Reader<EB, B>,
	C: Reader<EC, C>,
	project: (a: A, b: B, c: C) => R,
): Reader<{ [P in keyof (EA & EB & EC)]: (EA & EB & EC)[P] }, R>
function combine<EA, A, EB, B, EC, C, ED, D, R>(
	a: Reader<EA, A>,
	b: Reader<EB, B>,
	c: Reader<EC, C>,
	d: Reader<ED, D>,
	project: (a: A, b: B, c: C, d: D) => R,
): Reader<{ [P in keyof (EA & EB & EC & ED)]: (EA & EB & EC & ED)[P] }, R>
function combine<EA, A, EB, B, EC, C, ED, D, EE, E, R>(
	a: Reader<EA, A>,
	b: Reader<EB, B>,
	c: Reader<EC, C>,
	d: Reader<ED, D>,
	e: Reader<EE, E>,
	project: (a: A, b: B, c: C, d: D, e: E) => R,
): Reader<{ [P in keyof (EA & EB & EC & ED & EE)]: (EA & EB & EC & ED & EE)[P] }, R>
function combine<EA, A, EB, B, EC, C, ED, D, EE, E, R>(
	a: Reader<EA, A>,
	b: Reader<EB, B>,
	c: Reader<EC, C>,
	d: Reader<ED, D>,
	e: Reader<EE, E>,
	project: (a: A, b: B, c: C, d: D, e: E) => R,
): Reader<{ [P in keyof (EA & EB & EC & ED & EE)]: (EA & EB & EC & ED & EE)[P] }, R>
function combine<EA, A, EB, B, EC, C, ED, D, EE, E, EG, G, R>(
	a: Reader<EA, A>,
	b: Reader<EB, B>,
	c: Reader<EC, C>,
	d: Reader<ED, D>,
	e: Reader<EE, E>,
	g: Reader<EG, G>,
	project: (a: A, b: B, c: C, d: D, e: E, g: G) => R,
): Reader<{ [P in keyof (EA & EB & EC & ED & EE & EG)]: (EA & EB & EC & ED & EE & EG)[P] }, R>
function combine<EA, A, EB, B, EC, C, ED, D, EE, E, EG, G, EH, H, R>(
	a: Reader<EA, A>,
	b: Reader<EB, B>,
	c: Reader<EC, C>,
	d: Reader<ED, D>,
	e: Reader<EE, E>,
	g: Reader<EG, G>,
	h: Reader<EH, H>,
	project: (a: A, b: B, c: C, d: D, e: E, g: G, h: H) => R,
): Reader<{ [P in keyof (EA & EB & EC & ED & EE & EG & EH)]: (EA & EB & EC & ED & EE & EG & EH)[P] }, R>
function combine<EA, A, EB, B, EC, C, ED, D, EE, E, EG, G, EH, H, EI, I, R>(
	a: Reader<EA, A>,
	b: Reader<EB, B>,
	c: Reader<EC, C>,
	d: Reader<ED, D>,
	e: Reader<EE, E>,
	g: Reader<EG, G>,
	h: Reader<EH, H>,
	i: Reader<EI, I>,
	project: (a: A, b: B, c: C, d: D, e: E, g: G, h: H, i: I) => R,
): Reader<{ [P in keyof (EA & EB & EC & ED & EE & EG & EH & EI)]: (EA & EB & EC & ED & EE & EG & EH & EI)[P] }, R>
function combine<EA, A, EB, B, EC, C, ED, D, EE, E, EG, G, EH, H, EI, I, EJ, J, R>(
	a: Reader<EA, A>,
	b: Reader<EB, B>,
	c: Reader<EC, C>,
	d: Reader<ED, D>,
	e: Reader<EE, E>,
	g: Reader<EG, G>,
	h: Reader<EH, H>,
	i: Reader<EI, I>,
	j: Reader<EJ, J>,
	project: (a: A, b: B, c: C, d: D, e: E, g: G, h: H, i: I, j: J) => R,
): Reader<
	{ [P in keyof (EA & EB & EC & ED & EE & EG & EH & EI & EJ)]: (EA & EB & EC & ED & EE & EG & EH & EI & EJ)[P] },
	R
>
function combine<EA, A, EB, B, EC, C, ED, D, EE, E, EG, G, EH, H, EI, I, EJ, J, EK, K, R>(
	a: Reader<EA, A>,
	b: Reader<EB, B>,
	c: Reader<EC, C>,
	d: Reader<ED, D>,
	e: Reader<EE, E>,
	g: Reader<EG, G>,
	h: Reader<EH, H>,
	i: Reader<EI, I>,
	j: Reader<EJ, J>,
	k: Reader<EK, K>,
	project: (a: A, b: B, c: C, d: D, e: E, g: G, h: H, i: I, j: J, k: K) => R,
): Reader<
	{
		[P in keyof (EA & EB & EC & ED & EE & EG & EH & EI & EJ & EK)]: (EA &
			EB &
			EC &
			ED &
			EE &
			EG &
			EH &
			EI &
			EJ &
			EK)[P]
	},
	R
>
function combine<EA, A, EB, B, EC, C, ED, D, EE, E, EG, G, EH, H, EI, I, EJ, J, EK, K, EL, L, R>(
	a: Reader<EA, A>,
	b: Reader<EB, B>,
	c: Reader<EC, C>,
	d: Reader<ED, D>,
	e: Reader<EE, E>,
	g: Reader<EG, G>,
	h: Reader<EH, H>,
	i: Reader<EI, I>,
	j: Reader<EJ, J>,
	k: Reader<EK, K>,
	l: Reader<EL, L>,
	project: (a: A, b: B, c: C, d: D, e: E, g: G, h: H, i: I, j: J, k: K, l: L) => R,
): Reader<
	{
		[P in keyof (EA & EB & EC & ED & EE & EG & EH & EI & EJ & EK & EL)]: (EA &
			EB &
			EC &
			ED &
			EE &
			EG &
			EH &
			EI &
			EJ &
			EK &
			EL)[P]
	},
	R
>
function combine<E, A, R>(...args: NonEmptyArray<Reader<E, A> | ProjectMany<A, R>>): Reader<E, R> {
	const last = args.length - 1
	// eslint-disable-next-line no-restricted-syntax
	const fas = args.slice(0, last) as Reader<E, A>[]
	// eslint-disable-next-line no-restricted-syntax
	const project = args[last] as ProjectMany<A, R>
	return (e) => project(...fas.map((fa) => fa(e)))
}

const key = <A>() => <K extends PropertyKey>(key: K): Reader<{ [P in K]: A }, A> => (e) => e[key]

const defer = <E extends object, A, K extends keyof E>(
	fa: Reader<E, A>,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	...keys: K[]
): // eslint-disable-next-line no-restricted-syntax
Reader<Omit<E, K>, Reader<Pick<E, K>, A>> => (outerE) => (innerE) => fa(Object.assign({}, outerE, innerE) as E)

export const reader = {
	combine,
	key,
	defer,
}
