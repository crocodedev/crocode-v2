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
    title: 'Tworzenie back-endu',
  },
  info: {
    title: 'Czym jest Back-end?',
    texts: [
      `W coraz bardziej cyfrowym świecie Crocode jest Twoim zaufanym partnerem w dostarczaniu wysokiej jakości usług back-endowych. Jako kompleksowa firma zajmująca się tworzeniem oprogramowania i usług backendowych, mamy imponujące portfolio zrealizowanych projektów, które przyniosły znaczącą wartość naszym klientom. Nasz wykwalifikowany zespół tworzy bezpieczne i wydajne rozwiązania dopasowane do unikalnych potrzeb każdego klienta. Z nami możesz przyspieszyć transformację cyfrową swojego biznesu dzięki niezawodnemu kodowi back-endowemu.`,
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
        text: `Na podstawie zebranych wymagań nasz zespół opracowuje szczegółowy plan projektu, uwzględniający zakres, harmonogram, niezbędne zasoby, stos technologiczny, kamienie milowe oraz potencjalne ryzyka.`,
      },
      {
        title: 'Testowanie i zapewnienie jakości',
        text: `Poddajemy oprogramowanie rygorystycznym testom w celu identyfikacji i eliminacji błędów oraz niespójności. Przeprowadzamy testy funkcjonalne, wydajnościowe, bezpieczeństwa i użyteczności, gwarantując najwyższą jakość produktu końcowego.`,
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

const BackEndDevelopmentPage = ({ allRedirects, seo, breadcrumbs }: TProps) => {
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

export default BackEndDevelopmentPage;
