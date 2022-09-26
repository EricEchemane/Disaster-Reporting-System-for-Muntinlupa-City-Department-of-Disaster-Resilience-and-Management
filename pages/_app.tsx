// import '../styles/globals.css';
import { LoadingIndicatorProvider } from 'hooks/useLoadingIndicator';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <LoadingIndicatorProvider>
      <Component {...pageProps} />
    </LoadingIndicatorProvider>
  </>;
}

export default MyApp;
