import '../styles/globals.css';
import type { AppProps } from 'next/app';
import UserContextProvider from 'app/user.context';
import { LoadingIndicatorProvider } from 'hooks/with_provider/useLoadingIndicator';
import { NotificationProvider } from 'hooks/with_provider/useNotification';
import { AlertDialogProvider } from 'hooks/with_provider/useAlertDialog';
import { ConfirmDialogProvider } from 'hooks/with_provider/useConfirmDialog';
import { SessionProvider } from 'next-auth/react';

interface AppPropsWithSession extends AppProps {
  pageProps: { session: any; };
}

function MyApp({ Component, pageProps }: AppPropsWithSession) {
  return (
    <SessionProvider session={pageProps.session}>
      <UserContextProvider>
        <LoadingIndicatorProvider>
          <NotificationProvider>
            <AlertDialogProvider>
              <ConfirmDialogProvider>
                <Component {...pageProps} />
              </ConfirmDialogProvider>
            </AlertDialogProvider>
          </NotificationProvider>
        </LoadingIndicatorProvider>
      </UserContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
