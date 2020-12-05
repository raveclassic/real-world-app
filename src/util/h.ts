import { h as sinuousH, JSX as JSXInternal } from 'sinuous'
import { ElementChildren } from 'sinuous/shared'

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace H {
	export import JSX = JSXInternal

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export const createElement = (type: any, props: JSX.HTMLAttributes | null, ...children: ElementChildren[]) => {
		// if type is FunctionComponent (not a string or Fragment)
		// then we should inject children to props to mimic React
		// because TypeScript assumes that children in TSX should be
		// a part of target component's props (TS does not support hyperscript style)
		const p = typeof type === 'string' || type === Fragment ? props : { ...props, children }
		return sinuousH(type, p, ...children)
	}

	export const Fragment = (props: ElementChildren[], ...children: ElementChildren[]) =>
		sinuousH(children, ...children)
}
