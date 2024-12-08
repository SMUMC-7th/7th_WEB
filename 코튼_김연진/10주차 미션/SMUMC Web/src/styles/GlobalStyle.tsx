import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    /* color */
    --color-green-main: #148240;
    --color-grey-main: #D9D9D9;
    --color-grey-900: #5e5e5e;
    /* size */
    --size-title: 40px;

    /* font weight */
    --weight-title: 900;
  }
  body {
    font-family:'Noto Sans KR';

  }
`;

export default GlobalStyle;
