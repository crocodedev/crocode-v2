import { GetServerSideProps } from 'next';

import {
  AboutUs,
  Breadcrumbs,
  CardGrid,
  ContactUsForm,
  Hero,
  Info,
} from '@/components/sections';
import { TBreadcrumbs } from '@/components/sections/breadcrumbs/type';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';

import { getSeoProps } from '@/utils/seo';

import { getBreadcrumbs } from '@/graphql/queries/breadcrumbs';
import { useRedirect } from '@/hooks';
import { fetchGraphQL } from '@/lib/graphql';

const PROPS_SECTIONS = {
  hero: {
    title: 'Tworzenie gier',
  },
  info: {
    title: 'Czym jest GameDev?',
    texts: [
      `Tworzymy gry na platformy mobilne, konsole i komputery stacjonarne - od projektowania po rozwój i wsparcie na rynku. Gra to miliard hipotez, które znasz na początku rozwoju, oraz kolejne 100 miliardów czynników, które poznasz dopiero po premierze lub nigdy się o nich nie dowiesz. Kieruje nami chęć i motywacja do tworzenia najlepszych produktów, ponieważ proces rozwojowy jest długi i wymaga wielu skomplikowanych rozwiązań. W GameDev produkt może być ciągle ulepszany i modyfikowany. Powód? Końcowa wizja produktu może różnić się z powodu mnóstwa pomysłów. Dowiadujemy się, co podoba się naszej publiczności, poprzez eksperymenty i ciągłą analizę.`,
    ],
  },
  cardGrid: {
    title: 'Nasz proces',
    cards: [
      {
        title: 'Wdrożenie i premiera',
        text: `Po zakończeniu testów projekt jest gotowy do wdrożenia. Ta faza obejmuje konfigurację projektu na serwerach klienta lub odpowiednim środowisku hostingowym. Szczegółowe procedury wdrożeniowe zapewniają płynne przejście z fazy rozwojowej do produkcyjnej.`,
        color: 'green',
      },
      {
        title: 'Planowanie projektu',
        text: `Na podstawie zebranych wymagań nasz zespół opracowuje kompleksowy plan projektu, uwzględniający zakres, harmonogram, niezbędne zasoby, stos technologiczny, kamienie milowe i potencjalne ryzyka.`,
      },
      {
        title: 'Testowanie i zapewnienie jakości',
        text: `Poddajemy oprogramowanie rygorystycznym testom w celu identyfikacji i eliminacji błędów, usterek i niespójności. Obejmuje to testy funkcjonalne, wydajnościowe, bezpieczeństwa i użyteczności, gwarantujące najwyższe standardy jakości produktu końcowego.`,
        color: 'green',
      },
      {
        title: 'Projektowanie i architektura',
        text: `Faza projektowa obejmuje tworzenie makiet, prototypów i projektów interfejsu użytkownika. W przypadku projektów programistycznych kluczowe jest opracowanie architektury systemu, określającej strukturę oprogramowania, komponenty i technologie.`,
      },
      {
        title: 'Wdrożenie i premiera',
        text: `Po zakończeniu testów projekt jest gotowy do wdrożenia. Ta faza obejmuje konfigurację projektu na serwerach klienta lub odpowiednim środowisku hostingowym. Szczegółowe procedury wdrożeniowe zapewniają płynne przejście z fazy rozwojowej do produkcyjnej.`,
        color: 'black',
      },
    ],
  },
};

type TProps = TPageProps & {
  breadcrumbs: {
    data: TBreadcrumbs;
    error: string;
  };
};

const GameDevPage = ({ allRedirects, seo, breadcrumbs }: TProps) => {
  useRedirect(allRedirects);

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <Breadcrumbs sanityData={breadcrumbs?.data} />
      <Info {...PROPS_SECTIONS.info} />
      <CardGrid {...PROPS_SECTIONS.cardGrid} />
      <AboutUs />
      <ContactUsForm />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<TPageProps> = async (
  context,
) => {
  const slug = context.resolvedUrl;

  const { allRedirects, seo } = await getSeoProps(slug);
  const { data: dataBreadcrumbs, errors: errorsBreadcrumbs } =
    await fetchGraphQL(getBreadcrumbs(slug));

  return {
    props: {
      allRedirects,
      seo,
      breadcrumbs: {
        data: dataBreadcrumbs?.allPage?.[0]?.breadcrumbs ?? null,
        error: errorsBreadcrumbs ?? null,
      },
    },
  };
};

export default GameDevPage;
