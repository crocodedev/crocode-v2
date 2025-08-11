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
    modelsIsShow: true,
    title: 'Tworzenie front-endu',
  },
  info: {
    title: 'Czym jest Front-end?',
    texts: [
      `W miarę jak technologia cyfrowa rozwija się w bezprecedensowym tempie, rośnie zapotrzebowanie na zaawansowane usługi front-endowe. Wynika to z kluczowej roli, jaką front-end odgrywa w tworzeniu stron internetowych, odpowiadając za interaktywne i wizualne aspekty witryny, z którymi użytkownicy bezpośrednio współdziałają. Front-end developerzy w Crocode przekształcają złożone kody backendowe w angażujący interfejs użytkownika, wykorzystując różne języki programowania. Nasz zespół projektuje i rozwija różne elementy strony internetowej, takie jak przyciski, panele nawigacyjne, interfejs graficzny, animacje i układ treści. Oprócz stron internetowych, nasze usługi front-endowe obejmują również tworzenie oprogramowania i aplikacji webowych dostosowanych do różnorodnych potrzeb branżowych.`,
    ],
  },
  cardGrid: {
    title: 'Nasz proces',
    cards: [
      {
        title: 'Wdrożenie i uruchomienie',
        text: `Po zakończeniu testów projekt jest gotowy do wdrożenia. Ta faza obejmuje konfigurację projektu na serwerach klienta lub odpowiednim środowisku hostingowym. Szczegółowe procedury wdrożeniowe zapewniają płynne przejście z fazy rozwojowej do produkcyjnej.`,
        color: 'green',
      },
      {
        title: 'Planowanie projektu',
        text: `Na podstawie zebranych wymagań nasz zespół opracowuje kompleksowy plan projektu, uwzględniający zakres, harmonogram, niezbędne zasoby, stos technologiczny, kamienie milowe i potencjalne ryzyka.`,
      },
      {
        title: 'Testowanie i zapewnienie jakości',
        text: `Poddajemy oprogramowanie rygorystycznym testom w celu identyfikacji i usunięcia błędów, usterek i niespójności. Obejmuje to testy funkcjonalne, wydajnościowe, bezpieczeństwa i użyteczności, gwarantujące najwyższe standardy jakości produktu końcowego.`,
        color: 'green',
      },
      {
        title: 'Projektowanie i architektura',
        text: `Faza projektowa obejmuje tworzenie makiet, prototypów i projektów interfejsu użytkownika. W przypadku projektów programistycznych kluczowe jest opracowanie architektury systemu, określającej strukturę oprogramowania, komponenty i technologie.`,
      },
      {
        title: 'Wdrożenie i uruchomienie',
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
