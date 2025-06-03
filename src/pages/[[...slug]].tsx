import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import CookiesModal from '@/components/cookiesModal';
import * as Sections from '@/components/sections';
import Seo from '@/components/seo';

import * as graphqlTemplates from '@/graphql/templates';
import { sanityApi } from '@/lib/sanity';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default function Page({ seo, title, content, cookies }: any) {
  return (
    <>
      <Seo {...seo} title={title} />
      <CookiesModal {...cookies} />

      {content
        ?.sort((a: any, b: any) => +a.position - +b.position)
        ?.map(({ component, _id, ...props }: any) => {
          const Component = Sections[component as keyof typeof Sections];
          if (!Component) return null;
          return <Component key={_id} {...props} />;
        })}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  let slug: string;
  if (!params?.slug || params.slug.length === 0) {
    slug = '/';
  } else if (Array.isArray(params.slug)) {
    slug = '/' + params.slug.join('/');
  } else {
    slug = '/' + params.slug;
  }

  const data: any = await sanityApi.request(
    `
      query ($slug: String) {
        allSettings {
          ${graphqlTemplates['allSettings']}
        }
        allRedirect {
          ${graphqlTemplates['allRedirect']}
        }
        allCasesItem(where: { slug: { current: { eq: $slug } } }) {
          ${graphqlTemplates['allCasesItem']}
        }
        allCasesCountry(where: { slug: { current: { eq: $slug } } }) {
          ${graphqlTemplates['allCasesCountry']}
        }
        allBlogCategory(where: { slug: { current: { eq: $slug } } }) {
          ${graphqlTemplates['allBlogCategory']}
        }
        allArticlesItem(where: { slug: { current: { eq: $slug } } }) {
          ${graphqlTemplates['allArticlesItems']}
        }
        allPage(where: { slug: { current: { eq: $slug } } }) {
          ${graphqlTemplates['allPage']}
        }
      }
    `,
    { slug },
  );

  //Redirect
  // const redirectItem = data.allRedirect.find((item: any) => {
  //   try {
  //     const fromPathname = new URL(item.fromPath).pathname.replace(/\/+$/, '');
  //     const currentPathname = slug.replace(/\/+$/, '');
  //     return fromPathname.toLowerCase() === currentPathname.toLowerCase();
  //   } catch {
  //     return false;
  //   }
  // });

  // if (redirectItem) {
  //   return {
  //     redirect: {
  //       destination: redirectItem.toPath,
  //       permanent: redirectItem.statusCode === 301,
  //     },
  //   };
  // }

  const pages = [
    'allPage',
    'allBlogCategory',
    'allArticlesItem',
    'allCasesCountry',
    'allCasesItem',
  ];

  let pageData = null;
  for (const pageType of pages) {
    if (data[pageType]?.length > 0) {
      pageData = data[pageType][0];
      break;
    }
  }

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...pageData,
      seo: {
        url: slug,
        ...pageData.seo,
        ...data.allSettings[0],
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slug = `
    slug {
      current
    }
  `;

  const data: any = await sanityApi.request(`
    query {
      allPage {${slug}}
      allCasesItem {${slug}}
      allCasesCountry {${slug}}
      allBlogCategory {${slug}}
      allArticlesItem {${slug}}
    }
  `);

  const allPages = Object.values(data).flat();

  const allSlugs = allPages
    .filter((page: any) => typeof page.slug?.current === 'string')
    .filter((page: any) => page.slug?.current !== '/404')
    .map((page: any) => page.slug.current.replace(/^\/+/, ''));

  const uniqueSlugs = Array.from(new Set(allSlugs));

  const paths = uniqueSlugs.map((slugString) => {
    const slugArray = slugString.split('/').filter(Boolean);
    return {
      params: { slug: slugArray.length ? slugArray : [] },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};
