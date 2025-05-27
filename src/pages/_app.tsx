import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';

import '@/styles/_reset.scss';

const font = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
