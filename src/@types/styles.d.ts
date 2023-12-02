// only TYPE definitions codes

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

/* 
    para que as propriedades do objeto 
    seja incrementada na interface do tema 
*/

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
