import { JSXInternal } from 'sinuous/jsx'
import DOMAttributes = JSXInternal.DOMAttributes
import { Observable } from 'sinuous/observable'

export type Attribute<A> = A | Observable<A | undefined> | undefined

export type JSXNode = string | number | boolean | Element
export type JSXChild = JSXNode | JSXNode[]

export interface HTMLAttributes<RefType extends EventTarget = EventTarget> extends DOMAttributes<RefType> {
	// Standard HTML Attributes
	readonly accept?: Attribute<string>
	readonly acceptCharset?: Attribute<string>
	readonly accessKey?: Attribute<string>
	readonly action?: Attribute<string>
	readonly allowFullScreen?: Attribute<boolean>
	readonly allowTransparency?: Attribute<boolean>
	readonly alt?: Attribute<string>
	readonly as?: Attribute<string>
	readonly async?: Attribute<boolean>
	readonly autocomplete?: Attribute<string>
	readonly autoComplete?: Attribute<string>
	readonly autocorrect?: Attribute<string>
	readonly autoCorrect?: Attribute<string>
	readonly autofocus?: Attribute<boolean>
	readonly autoFocus?: Attribute<boolean>
	readonly autoPlay?: Attribute<boolean>
	readonly capture?: Attribute<boolean>
	readonly cellPadding?: Attribute<number | string>
	readonly cellSpacing?: Attribute<number | string>
	readonly charSet?: Attribute<string>
	readonly challenge?: Attribute<string>
	readonly checked?: Attribute<boolean>
	readonly class?: Attribute<string>
	readonly className?: Attribute<string>
	readonly cols?: Attribute<number>
	readonly colSpan?: Attribute<number>
	readonly content?: Attribute<string>
	readonly contentEditable?: Attribute<boolean>
	readonly contextMenu?: Attribute<string>
	readonly controls?: Attribute<boolean>
	readonly controlsList?: Attribute<string>
	readonly coords?: Attribute<string>
	readonly crossOrigin?: Attribute<string>
	readonly data?: Attribute<string>
	readonly dateTime?: Attribute<string>
	readonly default?: Attribute<boolean>
	readonly defer?: Attribute<boolean>
	readonly dir?: Attribute<'auto' | 'rtl' | 'ltr'>
	readonly disabled?: Attribute<boolean>
	readonly disableRemotePlayback?: Attribute<boolean>
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	readonly download?: Attribute<any>
	readonly draggable?: Attribute<boolean>
	readonly encType?: Attribute<string>
	readonly form?: Attribute<string>
	readonly formAction?: Attribute<string>
	readonly formEncType?: Attribute<string>
	readonly formMethod?: Attribute<string>
	readonly formNoValidate?: Attribute<boolean>
	readonly formTarget?: Attribute<string>
	readonly frameBorder?: Attribute<number | string>
	readonly headers?: Attribute<string>
	readonly height?: Attribute<number | string>
	readonly hidden?: Attribute<boolean>
	readonly high?: Attribute<number>
	readonly href?: Attribute<string>
	readonly hrefLang?: Attribute<string>
	readonly for?: Attribute<string>
	readonly htmlFor?: Attribute<string>
	readonly httpEquiv?: Attribute<string>
	readonly icon?: Attribute<string>
	readonly id?: Attribute<string>
	readonly inputMode?: Attribute<string>
	readonly integrity?: Attribute<string>
	readonly is?: Attribute<string>
	readonly keyParams?: Attribute<string>
	readonly keyType?: Attribute<string>
	readonly kind?: Attribute<string>
	readonly label?: Attribute<string>
	readonly lang?: Attribute<string>
	readonly list?: Attribute<string>
	readonly loop?: Attribute<boolean>
	readonly low?: Attribute<number>
	readonly manifest?: Attribute<string>
	readonly marginHeight?: Attribute<number>
	readonly marginWidth?: Attribute<number>
	readonly max?: Attribute<number | string>
	readonly maxLength?: Attribute<number>
	readonly media?: Attribute<string>
	readonly mediaGroup?: Attribute<string>
	readonly method?: Attribute<string>
	readonly min?: Attribute<number | string>
	readonly minLength?: Attribute<number>
	readonly multiple?: Attribute<boolean>
	readonly muted?: Attribute<boolean>
	readonly name?: Attribute<string>
	readonly nonce?: Attribute<string>
	readonly noValidate?: Attribute<boolean>
	readonly open?: Attribute<boolean>
	readonly optimum?: Attribute<number>
	readonly pattern?: Attribute<string>
	readonly placeholder?: Attribute<string>
	readonly playsInline?: Attribute<boolean>
	readonly poster?: Attribute<string>
	readonly preload?: Attribute<string>
	readonly radioGroup?: Attribute<string>
	readonly readOnly?: Attribute<boolean>
	readonly rel?: Attribute<string>
	readonly required?: Attribute<boolean>
	readonly role?: Attribute<string>
	readonly rows?: Attribute<number>
	readonly rowSpan?: Attribute<number>
	readonly sandbox?: Attribute<string>
	readonly scope?: Attribute<string>
	readonly scoped?: Attribute<boolean>
	readonly scrolling?: Attribute<string>
	readonly seamless?: Attribute<boolean>
	readonly selected?: Attribute<boolean>
	readonly shape?: Attribute<string>
	readonly size?: Attribute<number>
	readonly sizes?: Attribute<string>
	readonly slot?: Attribute<string>
	readonly span?: Attribute<number>
	readonly spellcheck?: Attribute<boolean>
	readonly src?: Attribute<string>
	readonly srcset?: Attribute<string>
	readonly srcDoc?: Attribute<string>
	readonly srcLang?: Attribute<string>
	readonly srcSet?: Attribute<string>
	readonly start?: Attribute<number>
	readonly step?: Attribute<number | string>
	readonly style?: Attribute<string | { [key: string]: Attribute<string | number> }>
	readonly summary?: Attribute<string>
	readonly tabIndex?: Attribute<number>
	readonly target?: Attribute<string>
	readonly title?: Attribute<string>
	readonly type?: Attribute<string>
	readonly useMap?: Attribute<string>
	readonly value?: Attribute<string | string[] | number>
	readonly volume?: Attribute<string | number>
	readonly width?: Attribute<number | string>
	readonly wmode?: Attribute<string>
	readonly wrap?: Attribute<string>

	// RDFa Attributes
	readonly about?: Attribute<string>
	readonly datatype?: Attribute<string>
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	readonly inlist?: Attribute<any>
	readonly prefix?: Attribute<string>
	readonly property?: Attribute<string>
	readonly resource?: Attribute<string>
	readonly typeof?: Attribute<string>
	readonly vocab?: Attribute<string>

	// Microdata Attributes
	readonly itemProp?: Attribute<string>
	readonly itemScope?: Attribute<boolean>
	readonly itemType?: Attribute<string>
	readonly itemID?: Attribute<string>
	readonly itemRef?: Attribute<string>
}

export interface SVGAttributes<Target extends EventTarget = SVGElement> extends HTMLAttributes<Target> {
	readonly accentHeight?: Attribute<number | string>
	readonly accumulate?: Attribute<'none' | 'sum'>
	readonly additive?: Attribute<'replace' | 'sum'>
	readonly alignmentBaseline?: Attribute<
		| 'auto'
		| 'baseline'
		| 'before-edge'
		| 'text-before-edge'
		| 'middle'
		| 'central'
		| 'after-edge'
		| 'text-after-edge'
		| 'ideographic'
		| 'alphabetic'
		| 'hanging'
		| 'mathematical'
		| 'inherit'
	>
	readonly allowReorder?: Attribute<'no' | 'yes'>
	readonly alphabetic?: Attribute<number | string>
	readonly amplitude?: Attribute<number | string>
	readonly arabicForm?: Attribute<'initial' | 'medial' | 'terminal' | 'isolated'>
	readonly ascent?: Attribute<number | string>
	readonly attributeName?: Attribute<string>
	readonly attributeType?: Attribute<string>
	readonly autoReverse?: Attribute<number | string>
	readonly azimuth?: Attribute<number | string>
	readonly baseFrequency?: Attribute<number | string>
	readonly baselineShift?: Attribute<number | string>
	readonly baseProfile?: Attribute<number | string>
	readonly bbox?: Attribute<number | string>
	readonly begin?: Attribute<number | string>
	readonly bias?: Attribute<number | string>
	readonly by?: Attribute<number | string>
	readonly calcMode?: Attribute<number | string>
	readonly capHeight?: Attribute<number | string>
	readonly clip?: Attribute<number | string>
	readonly clipPath?: Attribute<string>
	readonly clipPathUnits?: Attribute<number | string>
	readonly clipRule?: Attribute<number | string>
	readonly colorInterpolation?: Attribute<number | string>
	readonly colorInterpolationFilters?: Attribute<'auto' | 'sRGB' | 'linearRGB' | 'inherit'>
	readonly colorProfile?: Attribute<number | string>
	readonly colorRendering?: Attribute<number | string>
	readonly contentScriptType?: Attribute<number | string>
	readonly contentStyleType?: Attribute<number | string>
	readonly cursor?: Attribute<number | string>
	readonly cx?: Attribute<number | string>
	readonly cy?: Attribute<number | string>
	readonly d?: Attribute<string>
	readonly decelerate?: Attribute<number | string>
	readonly descent?: Attribute<number | string>
	readonly diffuseConstant?: Attribute<number | string>
	readonly direction?: Attribute<number | string>
	readonly display?: Attribute<number | string>
	readonly divisor?: Attribute<number | string>
	readonly dominantBaseline?: Attribute<number | string>
	readonly dur?: Attribute<number | string>
	readonly dx?: Attribute<number | string>
	readonly dy?: Attribute<number | string>
	readonly edgeMode?: Attribute<number | string>
	readonly elevation?: Attribute<number | string>
	readonly enableBackground?: Attribute<number | string>
	readonly end?: Attribute<number | string>
	readonly exponent?: Attribute<number | string>
	readonly externalResourcesRequired?: Attribute<number | string>
	readonly fill?: Attribute<string>
	readonly fillOpacity?: Attribute<number | string>
	readonly fillRule?: Attribute<'nonzero' | 'evenodd' | 'inherit'>
	readonly filter?: Attribute<string>
	readonly filterRes?: Attribute<number | string>
	readonly filterUnits?: Attribute<number | string>
	readonly floodColor?: Attribute<number | string>
	readonly floodOpacity?: Attribute<number | string>
	readonly focusable?: Attribute<number | string>
	readonly fontFamily?: Attribute<string>
	readonly fontSize?: Attribute<number | string>
	readonly fontSizeAdjust?: Attribute<number | string>
	readonly fontStretch?: Attribute<number | string>
	readonly fontStyle?: Attribute<number | string>
	readonly fontVariant?: Attribute<number | string>
	readonly fontWeight?: Attribute<number | string>
	readonly format?: Attribute<number | string>
	readonly from?: Attribute<number | string>
	readonly fx?: Attribute<number | string>
	readonly fy?: Attribute<number | string>
	readonly g1?: Attribute<number | string>
	readonly g2?: Attribute<number | string>
	readonly glyphName?: Attribute<number | string>
	readonly glyphOrientationHorizontal?: Attribute<number | string>
	readonly glyphOrientationVertical?: Attribute<number | string>
	readonly glyphRef?: Attribute<number | string>
	readonly gradientTransform?: Attribute<string>
	readonly gradientUnits?: Attribute<string>
	readonly hanging?: Attribute<number | string>
	readonly horizAdvX?: Attribute<number | string>
	readonly horizOriginX?: Attribute<number | string>
	readonly ideographic?: Attribute<number | string>
	readonly imageRendering?: Attribute<number | string>
	readonly in2?: Attribute<number | string>
	readonly in?: Attribute<string>
	readonly intercept?: Attribute<number | string>
	readonly k1?: Attribute<number | string>
	readonly k2?: Attribute<number | string>
	readonly k3?: Attribute<number | string>
	readonly k4?: Attribute<number | string>
	readonly k?: Attribute<number | string>
	readonly kernelMatrix?: Attribute<number | string>
	readonly kernelUnitLength?: Attribute<number | string>
	readonly kerning?: Attribute<number | string>
	readonly keyPoints?: Attribute<number | string>
	readonly keySplines?: Attribute<number | string>
	readonly keyTimes?: Attribute<number | string>
	readonly lengthAdjust?: Attribute<number | string>
	readonly letterSpacing?: Attribute<number | string>
	readonly lightingColor?: Attribute<number | string>
	readonly limitingConeAngle?: Attribute<number | string>
	readonly local?: Attribute<number | string>
	readonly markerEnd?: Attribute<string>
	readonly markerHeight?: Attribute<number | string>
	readonly markerMid?: Attribute<string>
	readonly markerStart?: Attribute<string>
	readonly markerUnits?: Attribute<number | string>
	readonly markerWidth?: Attribute<number | string>
	readonly mask?: Attribute<string>
	readonly maskContentUnits?: Attribute<number | string>
	readonly maskUnits?: Attribute<number | string>
	readonly mathematical?: Attribute<number | string>
	readonly mode?: Attribute<number | string>
	readonly numOctaves?: Attribute<number | string>
	readonly offset?: Attribute<number | string>
	readonly opacity?: Attribute<number | string>
	readonly operator?: Attribute<number | string>
	readonly order?: Attribute<number | string>
	readonly orient?: Attribute<number | string>
	readonly orientation?: Attribute<number | string>
	readonly origin?: Attribute<number | string>
	readonly overflow?: Attribute<number | string>
	readonly overlinePosition?: Attribute<number | string>
	readonly overlineThickness?: Attribute<number | string>
	readonly paintOrder?: Attribute<number | string>
	readonly panose1?: Attribute<number | string>
	readonly pathLength?: Attribute<number | string>
	readonly patternContentUnits?: Attribute<string>
	readonly patternTransform?: Attribute<number | string>
	readonly patternUnits?: Attribute<string>
	readonly pointerEvents?: Attribute<number | string>
	readonly points?: Attribute<string>
	readonly pointsAtX?: Attribute<number | string>
	readonly pointsAtY?: Attribute<number | string>
	readonly pointsAtZ?: Attribute<number | string>
	readonly preserveAlpha?: Attribute<number | string>
	readonly preserveAspectRatio?: Attribute<string>
	readonly primitiveUnits?: Attribute<number | string>
	readonly r?: Attribute<number | string>
	readonly radius?: Attribute<number | string>
	readonly refX?: Attribute<number | string>
	readonly refY?: Attribute<number | string>
	readonly renderingIntent?: Attribute<number | string>
	readonly repeatCount?: Attribute<number | string>
	readonly repeatDur?: Attribute<number | string>
	readonly requiredExtensions?: Attribute<number | string>
	readonly requiredFeatures?: Attribute<number | string>
	readonly restart?: Attribute<number | string>
	readonly result?: Attribute<string>
	readonly rotate?: Attribute<number | string>
	readonly rx?: Attribute<number | string>
	readonly ry?: Attribute<number | string>
	readonly scale?: Attribute<number | string>
	readonly seed?: Attribute<number | string>
	readonly shapeRendering?: Attribute<number | string>
	readonly slope?: Attribute<number | string>
	readonly spacing?: Attribute<number | string>
	readonly specularConstant?: Attribute<number | string>
	readonly specularExponent?: Attribute<number | string>
	readonly speed?: Attribute<number | string>
	readonly spreadMethod?: Attribute<string>
	readonly startOffset?: Attribute<number | string>
	readonly stdDeviation?: Attribute<number | string>
	readonly stemh?: Attribute<number | string>
	readonly stemv?: Attribute<number | string>
	readonly stitchTiles?: Attribute<number | string>
	readonly stopColor?: Attribute<string>
	readonly stopOpacity?: Attribute<number | string>
	readonly strikethroughPosition?: Attribute<number | string>
	readonly strikethroughThickness?: Attribute<number | string>
	readonly string?: Attribute<number | string>
	readonly stroke?: Attribute<string>
	readonly strokeDasharray?: Attribute<string | number>
	readonly strokeDashoffset?: Attribute<string | number>
	readonly strokeLinecap?: Attribute<'butt' | 'round' | 'square' | 'inherit'>
	readonly strokeLinejoin?: Attribute<'miter' | 'round' | 'bevel' | 'inherit'>
	readonly strokeMiterlimit?: Attribute<string>
	readonly strokeOpacity?: Attribute<number | string>
	readonly strokeWidth?: Attribute<number | string>
	readonly surfaceScale?: Attribute<number | string>
	readonly systemLanguage?: Attribute<number | string>
	readonly tableValues?: Attribute<number | string>
	readonly targetX?: Attribute<number | string>
	readonly targetY?: Attribute<number | string>
	readonly textAnchor?: Attribute<string>
	readonly textDecoration?: Attribute<number | string>
	readonly textLength?: Attribute<number | string>
	readonly textRendering?: Attribute<number | string>
	readonly to?: Attribute<number | string>
	readonly transform?: Attribute<string>
	readonly u1?: Attribute<number | string>
	readonly u2?: Attribute<number | string>
	readonly underlinePosition?: Attribute<number | string>
	readonly underlineThickness?: Attribute<number | string>
	readonly unicode?: Attribute<number | string>
	readonly unicodeBidi?: Attribute<number | string>
	readonly unicodeRange?: Attribute<number | string>
	readonly unitsPerEm?: Attribute<number | string>
	readonly vAlphabetic?: Attribute<number | string>
	readonly values?: Attribute<string>
	readonly vectorEffect?: Attribute<number | string>
	readonly version?: Attribute<string>
	readonly vertAdvY?: Attribute<number | string>
	readonly vertOriginX?: Attribute<number | string>
	readonly vertOriginY?: Attribute<number | string>
	readonly vHanging?: Attribute<number | string>
	readonly vIdeographic?: Attribute<number | string>
	readonly viewBox?: Attribute<string>
	readonly viewTarget?: Attribute<number | string>
	readonly visibility?: Attribute<number | string>
	readonly vMathematical?: Attribute<number | string>
	readonly widths?: Attribute<number | string>
	readonly wordSpacing?: Attribute<number | string>
	readonly writingMode?: Attribute<number | string>
	readonly x1?: Attribute<number | string>
	readonly x2?: Attribute<number | string>
	readonly x?: Attribute<number | string>
	readonly xChannelSelector?: Attribute<string>
	readonly xHeight?: Attribute<number | string>
	readonly xlinkActuate?: Attribute<string>
	readonly xlinkArcrole?: Attribute<string>
	readonly xlinkHref?: Attribute<string>
	readonly xlinkRole?: Attribute<string>
	readonly xlinkShow?: Attribute<string>
	readonly xlinkTitle?: Attribute<string>
	readonly xlinkType?: Attribute<string>
	readonly xmlBase?: Attribute<string>
	readonly xmlLang?: Attribute<string>
	readonly xmlns?: Attribute<string>
	readonly xmlnsXlink?: Attribute<string>
	readonly xmlSpace?: Attribute<string>
	readonly y1?: Attribute<number | string>
	readonly y2?: Attribute<number | string>
	readonly y?: Attribute<number | string>
	readonly yChannelSelector?: Attribute<string>
	readonly z?: Attribute<number | string>
	readonly zoomAndPan?: Attribute<string>
}

export interface TagToElement {
	// HTML
	readonly a: HTMLAnchorElement
	readonly abbr: HTMLElement
	readonly address: HTMLElement
	readonly area: HTMLAreaElement
	readonly article: HTMLElement
	readonly aside: HTMLElement
	readonly audio: HTMLAudioElement
	readonly b: HTMLElement
	readonly base: HTMLBaseElement
	readonly bdi: HTMLElement
	readonly bdo: HTMLElement
	readonly big: HTMLElement
	readonly blockquote: HTMLQuoteElement
	readonly body: HTMLBodyElement
	readonly br: HTMLBRElement
	readonly button: HTMLButtonElement
	readonly canvas: HTMLCanvasElement
	readonly caption: HTMLTableCaptionElement
	readonly cite: HTMLElement
	readonly code: HTMLElement
	readonly col: HTMLTableColElement
	readonly colgroup: HTMLTableColElement
	readonly data: HTMLDataElement
	readonly datalist: HTMLDataListElement
	readonly dd: HTMLElement
	readonly del: HTMLModElement
	readonly details: HTMLDetailsElement
	readonly dfn: HTMLElement
	readonly dialog: HTMLDialogElement
	readonly div: HTMLDivElement
	readonly dl: HTMLDListElement
	readonly dt: HTMLElement
	readonly em: HTMLElement
	readonly embed: HTMLEmbedElement
	readonly fieldset: HTMLFieldSetElement
	readonly figcaption: HTMLElement
	readonly figure: HTMLElement
	readonly footer: HTMLElement
	readonly form: HTMLFormElement
	readonly h1: HTMLHeadingElement
	readonly h2: HTMLHeadingElement
	readonly h3: HTMLHeadingElement
	readonly h4: HTMLHeadingElement
	readonly h5: HTMLHeadingElement
	readonly h6: HTMLHeadingElement
	readonly head: HTMLHeadElement
	readonly header: HTMLElement
	readonly hgroup: HTMLElement
	readonly hr: HTMLHRElement
	readonly html: HTMLHtmlElement
	readonly i: HTMLElement
	readonly iframe: HTMLIFrameElement
	readonly img: HTMLImageElement
	readonly input: HTMLInputElement
	readonly ins: HTMLModElement
	readonly kbd: HTMLElement
	readonly keygen: HTMLUnknownElement
	readonly label: HTMLLabelElement
	readonly legend: HTMLLegendElement
	readonly li: HTMLLIElement
	readonly link: HTMLLinkElement
	readonly main: HTMLElement
	readonly map: HTMLMapElement
	readonly mark: HTMLElement
	readonly menu: HTMLMenuElement
	readonly menuitem: HTMLUnknownElement
	readonly meta: HTMLMetaElement
	readonly meter: HTMLMeterElement
	readonly nav: HTMLElement
	readonly noscript: HTMLElement
	readonly object: HTMLObjectElement
	readonly ol: HTMLOListElement
	readonly optgroup: HTMLOptGroupElement
	readonly option: HTMLOptionElement
	readonly output: HTMLOutputElement
	readonly p: HTMLParagraphElement
	readonly param: HTMLParamElement
	readonly picture: HTMLPictureElement
	readonly pre: HTMLPreElement
	readonly progress: HTMLProgressElement
	readonly q: HTMLQuoteElement
	readonly rp: HTMLElement
	readonly rt: HTMLElement
	readonly ruby: HTMLElement
	readonly s: HTMLElement
	readonly samp: HTMLElement
	readonly script: HTMLScriptElement
	readonly section: HTMLElement
	readonly select: HTMLSelectElement
	readonly slot: HTMLSlotElement
	readonly small: HTMLElement
	readonly source: HTMLSourceElement
	readonly span: HTMLSpanElement
	readonly strong: HTMLElement
	readonly style: HTMLStyleElement
	readonly sub: HTMLElement
	readonly summary: HTMLElement
	readonly sup: HTMLElement
	readonly table: HTMLTableElement
	readonly tbody: HTMLTableSectionElement
	readonly td: HTMLTableCellElement
	readonly textarea: HTMLTextAreaElement
	readonly tfoot: HTMLTableSectionElement
	readonly th: HTMLTableCellElement
	readonly thead: HTMLTableSectionElement
	readonly time: HTMLTimeElement
	readonly title: HTMLTitleElement
	readonly tr: HTMLTableRowElement
	readonly track: HTMLTrackElement
	readonly u: HTMLElement
	readonly ul: HTMLUListElement
	readonly var: HTMLElement
	readonly video: HTMLVideoElement
	readonly wbr: HTMLElement

	//SVG
	readonly svg: SVGSVGElement
	readonly animate: SVGAnimateElement
	readonly circle: SVGCircleElement
	readonly clipPath: SVGClipPathElement
	readonly defs: SVGDefsElement
	readonly desc: SVGDescElement
	readonly ellipse: SVGEllipseElement
	readonly feBlend: SVGFEBlendElement
	readonly feColorMatrix: SVGFEColorMatrixElement
	readonly feComponentTransfer: SVGFEComponentTransferElement
	readonly feComposite: SVGFECompositeElement
	readonly feConvolveMatrix: SVGFEConvolveMatrixElement
	readonly feDiffuseLighting: SVGFEDiffuseLightingElement
	readonly feDisplacementMap: SVGFEDisplacementMapElement
	readonly feFlood: SVGFEFloodElement
	readonly feGaussianBlur: SVGFEGaussianBlurElement
	readonly feImage: SVGFEImageElement
	readonly feMerge: SVGFEMergeElement
	readonly feMergeNode: SVGFEMergeNodeElement
	readonly feMorphology: SVGFEMorphologyElement
	readonly feOffset: SVGFEOffsetElement
	readonly feSpecularLighting: SVGFESpecularLightingElement
	readonly feTile: SVGFETileElement
	readonly feTurbulence: SVGFETurbulenceElement
	readonly filter: SVGFilterElement
	readonly foreignObject: SVGForeignObjectElement
	readonly g: SVGGElement
	readonly image: SVGImageElement
	readonly line: SVGLineElement
	readonly linearGradient: SVGLinearGradientElement
	readonly marker: SVGMarkerElement
	readonly mask: SVGMaskElement
	readonly path: SVGPathElement
	readonly pattern: SVGPatternElement
	readonly polygon: SVGPolygonElement
	readonly polyline: SVGPolylineElement
	readonly radialGradient: SVGRadialGradientElement
	readonly rect: SVGRectElement
	readonly stop: SVGStopElement
	readonly symbol: SVGSymbolElement
	readonly text: SVGTextElement
	readonly tspan: SVGTSpanElement
	readonly use: SVGUseElement
}

export type Tag = keyof TagToElement
