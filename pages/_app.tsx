import '../styles/globals.css';
import type { AppProps } from 'next/app';
import BarangayProvider from 'providers/barangay';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BarangayProvider>
      <Component {...pageProps} />
    </BarangayProvider>
  );
}

export default MyApp;
