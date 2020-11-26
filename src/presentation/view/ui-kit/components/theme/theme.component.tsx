import 'normalize.css'
import { h } from 'sinuous'
import { ElementChild } from 'sinuous/shared'
import { glob } from 'goober'

glob`
    body {
        font-size: 14px;
        font-family: 'Open Sans';
    }
`

export interface ThemeProps {}

export const Theme = (props: ThemeProps, children: ElementChild) => <div>{children}</div>
