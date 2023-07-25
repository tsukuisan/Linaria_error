import {css} from "@linaria/core";
import {AppInitialProps, AppProps} from "next/app";
import Head from "next/head";


type Props = AppProps<AppInitialProps>;

export const globalStyle = css`
  :global() {
    *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
      all: unset;
      display: revert;
    }
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
  }
`;

const App: React.FC<Props> = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width"/>
      </Head>
      <Component className={globalStyle} {...pageProps}/>
    </>
  );
};

export default App;
