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
    title: 'Tworzenie aplikacji mobilnych',
  },
  info: {
    title: 'Czym jest rozwój mobilny?',
    texts: [
      `W erze transformacji cyfrowej posiadanie solidnej obecności mobilnej jest niezbędne. Crocode, jako wiodąca firma IT, doskonale to rozumie, oferując wyjątkowe usługi rozwoju aplikacji mobilnych. Urządzenia mobilne znacząco zmieniły sposób, w jaki wchodzimy w interakcje ze światem. Nasze usługi tworzenia aplikacji mobilnych obejmują budowę nowoczesnych rozwiązań, które zapewniają płynne doświadczenia użytkownika na wszystkich platformach i urządzeniach mobilnych.`,
    ],
  },
  cardGrid: {
    title: 'Nasz proces',
    cards: [
      {
        title: 'Wdrożenie i uruchomienie',
        text: `Po zakończeniu testów projekt jest gotowy do wdrożenia. Ta faza obejmuje konfigurację projektu na serwerach klienta lub odpowiednim środowisku hostingowym. Dzięki szczegółowym procedurom wdrożeniowym zapewniamy płynne przejście z fazy rozwojowej do produkcyjnej.`,
        color: 'green',
      },
      {
        title: 'Planowanie projektu',
        text: `Na podstawie zebranych wymagań nasz zespół opracowuje kompleksowy plan projektu, uwzględniający zakres, harmonogram, niezbędne zasoby, stos technologiczny, kamienie milowe i potencjalne ryzyka.`,
      },
      {
        title: 'Testowanie i zapewnienie jakości',
        text: `Poddajemy oprogramowanie rygorystycznym testom w celu identyfikacji i usunięcia błędów oraz niespójności. Przeprowadzamy testy funkcjonalne, wydajnościowe, bezpieczeństwa i użyteczności, gwarantując najwyższą jakość produktu końcowego.`,
        color: 'green',
      },
      {
        title: 'Projektowanie i architektura',
        text: `Faza projektowa obejmuje tworzenie makiet, prototypów i projektów interfejsu użytkownika. W przypadku projektów programistycznych kluczowe jest opracowanie architektury systemu, określającej strukturę oprogramowania, komponenty i wykorzystywane technologie.`,
      },
      {
        title: 'Wdrożenie i uruchomienie',
        text: `Po zakończeniu testów projekt jest gotowy do wdrożenia. Ta faza obejmuje konfigurację projektu na serwerach klienta lub odpowiednim środowisku hostingowym. Dzięki szczegółowym procedurom wdrożeniowym zapewniamy płynne przejście z fazy rozwojowej do produkcyjnej.`,
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

const FrontEndDevelopmentPage = ({
  allRedirects,
  seo,
  breadcrumbs,
}: TProps) => {
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

export default FrontEndDevelopmentPage;
