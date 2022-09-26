// import '../styles/globals.css';
import { ConfirmDialogProvider } from 'hooks/useConfirmDialog';
import { LoadingIndicatorProvider } from 'hooks/useLoadingIndicator';
import { NotificationProvider } from 'hooks/useNotification';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <LoadingIndicatorProvider>
      <NotificationProvider>
        <ConfirmDialogProvider>
          <Component {...pageProps} />
        </ConfirmDialogProvider>
      </NotificationProvider>
    </LoadingIndicatorProvider>
  </>;
}

export default MyApp;
