import { GetServerSideProps } from 'next';

import {
  AboutUs,
  Breadcrumbs,
  CardGrid,
  ContactUsForm,
  Hero,
  OurFigures,
  OurProject,
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
    title: 'Doradztwo w zakresie tworzenia oprogramowania',
  },
  ourServices: {
    title: 'Nasze usługi',
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
    ],
  },
  consulting: {
    title: 'Konsulting Full Stack Premium',
    cards: [
      {
        title: 'Konsultacje',
        text: 'Doradzimy w kwestiach bieżących i zajmiemy się Twoim zadaniem najszybciej, jak to możliwe.',
      },
      {
        title: 'Analityka',
        text: 'Nasi eksperci badają różne dane, analizują je w odniesieniu do oczekiwanego rezultatu, formułują hipotezy i proponują rozwiązania, które pomogą Ci osiągnąć zamierzony cel.',
      },
      {
        title: 'Prognozowanie',
        text: 'Specjaliści zespołu Crocode korzystają z różnych metod i narzędzi do symulacji przyszłych sytuacji. W efekcie klient może znaleźć dla siebie optymalną ścieżkę rozwoju.',
      },
      {
        title: 'Przegląd i audyt',
        text: 'Konsultanci analizują działalność klienta, identyfikują wszelkie niedociągnięcia i błędy, sugerują sposoby eliminacji negatywnych aspektów.',
      },
      {
        title: 'Udział w działalności klienta',
        text: 'W tym przypadku nasi eksperci towarzyszą klientowi od początku do końca. Najpierw analizują biznes, wykrywają niedociągnięcia, szukają rozwiązań, a następnie pomagają je wdrożyć. Oceniamy wyniki i w razie potrzeby wprowadzamy poprawki.',
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

const SoftwareDevelopmentConsultancyPage = ({
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
      <CardGrid {...PROPS_SECTIONS.ourServices} />
      <CardGrid {...PROPS_SECTIONS.consulting} />
      <OurFigures />
      <AboutUs />
      <OurProject />
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

export default SoftwareDevelopmentConsultancyPage;
