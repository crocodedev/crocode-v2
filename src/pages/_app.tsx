import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';

import ArrowUpScroll from '@/components/arrow-up-scroll';
import ContactUSModal from '@/components/contactUsModal';
import { PopupProvider } from '@/components/context-popup';
import { Footer, Header } from '@/components/sections';
import Seo from '@/components/seo';

import '@/styles/_global.scss';
import '@/styles/_reset.scss';

const font = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <PopupProvider>
        <ContactUSModal />
        <ArrowUpScroll />
        <main className={font.className}>
          <Header />
          <div className='content'>
            <Component {...pageProps} />
          </div>
          <Footer />
        </main>
      </PopupProvider>
    </>
  );
}
