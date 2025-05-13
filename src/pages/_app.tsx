import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';

import Layout from '@/components/layout';

import '@/styles/_globals.scss';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
