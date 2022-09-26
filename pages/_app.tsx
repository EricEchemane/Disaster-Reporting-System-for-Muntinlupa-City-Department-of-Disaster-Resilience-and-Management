// import '../styles/globals.css';
import { LoadingIndicatorProvider } from 'hooks/useLoadingIndicator';
import { NotificationProvider } from 'hooks/useNotification';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <LoadingIndicatorProvider>
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    </LoadingIndicatorProvider>
  </>;
}

export default MyApp;
