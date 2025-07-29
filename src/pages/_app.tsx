import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';

import ArrowUpScroll from '@/components/arrow-up-scroll';
import ContactUSModal from '@/components/contactUsModal';
import CookiesModal from '@/components/cookiesModal';
import { MainProvider } from '@/components/main-context';
import { StoreProvider } from '@/components/store-context';
import { Footer, Header } from '@/components/sections';

import '@/styles/_global.scss';
import '@/styles/_reset.scss';

const font = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainProvider>
        <ContactUSModal />
        <CookiesModal />
        <ArrowUpScroll />
        <StoreProvider>
          <main className={font.className}>
            <Header />
            <div className='content'>
              <Component {...pageProps} />
            </div>
            <Footer />
          </main>
        </StoreProvider>
      </MainProvider>
    </>
  );
}
