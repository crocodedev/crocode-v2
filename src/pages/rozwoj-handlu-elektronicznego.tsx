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
    title: 'Tworzenie sklepów internetowych',
  },
  info: {
    title: 'Czym jest rozwój e-commerce?',
    texts: [
      `Witamy w Crocode - wiodącej firmie specjalizującej się w rozwoju rozwiązań e-commerce. Jesteśmy firmą IT, która wyznacza nowe standardy w handlu cyfrowym, oferując spersonalizowane rozwiązania e-commerce umożliwiające firmom dostarczanie klientom wyjątkowych doświadczeń zakupowych.`,
    ],
  },
  cardGrid: {
    title: 'Nasz proces',
    cards: [
      {
        title: 'Wdrożenie i uruchomienie',
        text: `Po zakończeniu testów projekt jest gotowy do wdrożenia. Ta faza obejmuje konfigurację systemu na serwerach klienta lub wybranym środowisku hostingowym. Dzięki szczegółowym procedurom wdrożeniowym zapewniamy płynne przejście z fazy rozwojowej do produkcyjnej.`,
        color: 'green',
      },
      {
        title: 'Planowanie projektu',
        text: `Na podstawie zebranych wymagań nasz zespół opracowuje kompleksowy plan projektu, uwzględniający zakres, harmonogram, niezbędne zasoby, stos technologiczny oraz potencjalne ryzyka.`,
      },
      {
        title: 'Testowanie i kontrola jakości',
        text: `Przeprowadzamy rygorystyczne testy oprogramowania w celu identyfikacji i eliminacji błędów. Obejmują one testy funkcjonalne, wydajnościowe, bezpieczeństwa i użyteczności, gwarantujące najwyższą jakość finalnego produktu.`,
        color: 'green',
      },
      {
        title: 'Projektowanie i architektura',
        text: `W fazie projektowej tworzymy makiety, prototypy i projekty interfejsów. Dla projektów e-commerce kluczowe jest opracowanie odpowiedniej architektury systemu, określającej jego strukturę, komponenty i wykorzystywane technologie.`,
      },
      {
        title: 'Wdrożenie i uruchomienie',
        text: `Po pomyślnym zakończeniu testów system jest gotowy do wdrożenia. Finalna faza obejmuje konfigurację wszystkich elementów sklepu i jego uruchomienie w środowisku produkcyjnym.`,
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

const ECommercePage = ({ allRedirects, seo, breadcrumbs }: TProps) => {
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

export default ECommercePage;
