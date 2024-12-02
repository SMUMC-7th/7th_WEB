import { createGlobalStyle } from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400; 
  }

  .noto-sans-kr-100 {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 100; 
    font-style: normal;
  }

  .noto-sans-kr-200 {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 200; 
    font-style: normal;
  }

  .noto-sans-kr-300 {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300; 
    font-style: normal;
  }

  .noto-sans-kr-400 {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400; 
    font-style: normal;
  }

  .noto-sans-kr-500 {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500; 
    font-style: normal;
  }

  .noto-sans-kr-600 {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 600; 
    font-style: normal;
  }

  .noto-sans-kr-700 {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700; 
    font-style: normal;
  }

  .noto-sans-kr-800 {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 800; 
    font-style: normal;
  }

  .noto-sans-kr-900 {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900; 
    font-style: normal;
  }
`;

const GlobalFont = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
                    />
                </Helmet>
                <GlobalStyle />
            </HelmetProvider>
        </>
    );
};

export default GlobalFont;
