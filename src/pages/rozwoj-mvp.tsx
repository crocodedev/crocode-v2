import { GetServerSideProps } from 'next';

import {
  AboutUs,
  Banner,
  Breadcrumbs,
  CardGrid,
  ContactUsForm,
  Hero,
  MVP,
  WhyCrocode,
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
    title: 'ROZWÓJ MVP',
  },
  banner: {
    title: `Skorzystaj z Usług Rozwoju Front-Endowego Crocode`,
    image: {
      src: '/images/background.jpg',
      alt: 'background',
    },
  },
  cardGrid: {
    title: 'Nasz proces realizacji',
    cards: [
      {
        title: 'Wdrożenie i uruchomienie',
        text: `Po zakończeniu testów projekt jest gotowy do wdrożenia. Ta faza obejmuje konfigurację projektu na serwerach klienta lub odpowiednim środowisku hostingowym. Dzięki szczegółowym procedurom wdrożeniowym zapewniamy płynne przejście z fazy rozwojowej do produkcyjnej.`,
        color: 'green',
      },
      {
        title: 'Planowanie projektu',
        text: `Na podstawie zebranych wymagań nasz zespół opracowuje kompleksowy plan projektu. Obejmuje to określenie zakresu projektu, harmonogramu, potrzebnych zasobów, stosu technologicznego, kamieni milowych oraz potencjalnych ryzyk.`,
      },
      {
        title: 'Testowanie i zapewnienie jakości',
        text: `Poddajemy oprogramowanie rygorystycznym testom w celu identyfikacji i usunięcia błędów, usterek lub niespójności. Obejmuje to testy funkcjonalne, wydajnościowe, bezpieczeństwa i użyteczności, aby zapewnić, że finalny produkt spełnia najwyższe standardy jakości.`,
        color: 'green',
      },
      {
        title: 'Projektowanie i architektura',
        text: `Faza projektowa obejmuje tworzenie makiet, prototypów i projektów interfejsu użytkownika. W przypadku projektów programistycznych kluczowe jest opracowanie architektury systemu, określającej strukturę oprogramowania, komponenty i używane technologie. Ta faza zapewnia przemyślenie zarówno aspektów wizualnych, jak i technicznych.`,
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

const MvpPage = ({ allRedirects, seo, breadcrumbs }: TProps) => {
  useRedirect(allRedirects);

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <Breadcrumbs sanityData={breadcrumbs?.data} />
      <MVP />
      <Banner {...PROPS_SECTIONS.banner} />
      <CardGrid {...PROPS_SECTIONS.cardGrid} />
      <WhyCrocode />
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

export default MvpPage;
