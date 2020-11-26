import { ElementChild, ElementChildren } from 'sinuous/shared'
import { Attribute, HTMLAttributes, Tag, TagToElement } from './dom'
import { h } from 'sinuous'
import { computed } from 'sinuous/observable'
import { css } from 'goober'

export type Props<T extends Tag, P> = P & HTMLAttributes<TagToElement[T]>

export type StyledProps<T extends Tag, P> = P & HTMLAttributes<TagToElement[T]> & { children?: ElementChildren }

export type TemplateArg<T extends Tag, P> =
	| string
	| number
	| undefined
	| ((props: StyledProps<T, P>) => string | number | undefined)

interface Context {
	p?: unknown
	o?: boolean
}

export type StyledTemplateArgs<T extends Tag, P> = [TemplateStringsArray, ...TemplateArg<T, P>[]]

export const styled = <T extends Tag>(tag: T) => {
	const ctx: Context = {}
	return <P>(...args: StyledTemplateArgs<T, P>) => (
		props: StyledProps<T, P> | null,
		...children: ElementChild[]
	): TagToElement[T] => {
		const className = computed(() => {
			ctx.p = props
			const previous = props === null ? undefined : getClassName(props.className)
			ctx.o = previous !== undefined && /\s*go[0-9]+/g.test(previous)
			// eslint-disable-next-line no-restricted-syntax,@typescript-eslint/no-explicit-any
			const generated = css.apply(ctx, args as any)
			return generated + (previous !== undefined ? previous : '')
		})
		const newProps = {
			...props,
			className,
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any,no-restricted-syntax
		return (h as any)(tag, newProps, ...children)
	}
}

const getClassName = (input: Attribute<string>): string | undefined => {
	if (input === undefined || typeof input === 'string') {
		return input
	}
	return getClassName(input())
}
