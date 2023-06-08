import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}
   
  body {
    margin: 0;
  }
`

export default GlobalStyles
