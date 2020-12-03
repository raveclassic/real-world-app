import { JSXInternal } from 'sinuous/jsx'

export interface FC<P> {
	(props: P): JSXInternal.Element
}
