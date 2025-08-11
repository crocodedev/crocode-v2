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
    title: 'Rozwój Headless CMS',
  },
  info: {
    title: 'Czym jest rozwój Headless CMS?',
    texts: [
      `W ERZE, W KTÓREJ TREŚĆ JEST KRÓLEM, A POTRZEBA EFEKTYWNEGO ZARZĄDZANIA TREŚCIĄ JEST PRIORYTETOWA, ROZWÓJ HEADLESS CMS TO KLUCZOWA USŁUGA OFEROWANA PRZEZ CROCDE, NOWOCZESNĄ FIRMĘ IT, DLA SWOICH KLIENTÓW.`,
    ],
  },
  cardGrid: {
    title: 'Nasz proces',
    cards: [
      {
        title: 'Wdrożenie i uruchomienie',
        text: `Po zakończeniu testów projekt jest gotowy do wdrożenia. Ten etap obejmuje konfigurację projektu na serwerach klienta lub w odpowiednim środowisku hostingowym. Starannie przeprowadzony proces wdrożenia zapewnia płynne przejście z etapu rozwoju do produkcji.`,
        color: 'green',
      },
      {
        title: 'Planowanie projektu',
        text: `Na podstawie zebranych wymagań nasz zespół opracowuje kompleksowy plan projektu. Obejmuje on określenie zakresu projektu, harmonogramu, potrzebnych zasobów, stosu technologicznego, kamieni milowych oraz potencjalnych ryzyk.`,
      },
      {
        title: 'Testowanie i zapewnienie jakości',
        text: `Poddajemy oprogramowanie rygorystycznym testom w celu zidentyfikowania i naprawienia błędów, usterek lub niespójności. Obejmuje to testy funkcjonalne, wydajnościowe, bezpieczeństwa i użyteczności, aby zagwarantować, że końcowy produkt spełnia najwyższe standardy jakości.`,
        color: 'green',
      },
      {
        title: 'Projektowanie i architektura',
        text: `Faza projektowania obejmuje tworzenie makiet, prototypów i projektów interfejsu użytkownika. W przypadku projektów programistycznych projekt architektoniczny jest kluczowy — określa strukturę, komponenty i używane technologie. Ten etap zapewnia dobre przemyślenie zarówno aspektów wizualnych, jak i technicznych.`,
      },
      {
        title: 'Wdrożenie i uruchomienie',
        text: `Po zakończeniu testów projekt jest gotowy do wdrożenia. Ten etap obejmuje konfigurację projektu na serwerach klienta lub w odpowiednim środowisku hostingowym. Starannie przeprowadzony proces wdrożenia zapewnia płynne przejście z etapu rozwoju do produkcji.`,
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

const HeadlessCMSDevPage = ({ allRedirects, seo, breadcrumbs }: TProps) => {
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

export default HeadlessCMSDevPage;
