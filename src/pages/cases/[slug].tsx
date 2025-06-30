import { GetServerSideProps } from 'next';
import { fetchGraphQL } from '@/lib/graphql';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { getCaseItem } from '@/graphql/queries/cases';
import { TCase } from '@/components/sections/cases/type';
import { TSanityError } from '@/types/sanityError';
import { Fragment } from 'react';
import { AboutUs, ContactUsForm, Hero, SectionLayout } from '@/components/sections';


type TProps = {
  caseItem: TCase;
  errors: TSanityError[];
}

const CasePage = ({ caseItem, errors }: TProps) => {
  const router = useRouter();
  const { title, casesItemImage } = caseItem;

  if (errors) {
    return <div>Error {errors[0].message}</div>;
  }

  if (router.isFallback) return <div>Loading...</div>;
  if (!caseItem) return <div>Not found</div>;

  return (
    <Fragment>
      <Hero title={title} modelsIsShow={true} />
      {/* TODO: Менять санити */}
      <AboutUs />
      <ContactUsForm />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<TProps> = (async (context) => {
  const slug = context.params?.slug;

  const query = getCaseItem(slug as string);

  const variables = { slug };
  const { data, errors } = await fetchGraphQL(query, variables);
  const caseItem = data?.allCasesItem?.[0] || null;


  return {
    props: {
      caseItem: caseItem ?? null,
      errors: errors ?? null
    },
  };
}) satisfies GetServerSideProps<TProps>;

export default CasePage;
