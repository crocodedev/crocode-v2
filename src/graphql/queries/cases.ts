export const ITEMS_PER_PAGE = 6;
export const DEFAULT_VALUE_ALL_COUNTRY = 'All Country';

export const ALL_CASES_ITEMS = `
  query {
    allCasesItem {
      _id
      title
      slug { current }
      technologies
      text
      marker
      link {
        _key
        title
        linkExternal { href label blank }
        linkInternal { label reference { ... on Page { slug { current } } } }
      }
      casesItemImage {
        altText
        image {asset {url} }
      }

      seo {
        title
        description
        keywords
        
      }
    }
  }
`;

export const getCaseItem = (slug: string) => `
  query {
    allCasesItem(where: { slug: { current: { matches: "${slug}" } } }) {
      _id
      title
      text
      casesItemImage { altText image { asset { url } } }
    }
  }
`;

export const getCasesItems = (
  limit: number = ITEMS_PER_PAGE,
  offset: number = 0,
  country?: string,
) => {
  let filter = '';

  if (country && country != DEFAULT_VALUE_ALL_COUNTRY)
    filter += `country: { title: { eq: "${country}" } },`;

  const where = filter ? `where: { ${filter} }` : '';

  return `
    query {
      allCasesItem(${where} limit: ${limit}, offset: ${offset}) {
        _id
        title
        slug { current }
        technologies
        text
        marker
        link {
          _key
          title
          linkExternal { href label blank }
          linkInternal { label reference { ... on Page { slug { current } } } }
        }
        casesItemImage {
          altText
          image {asset {url} }
        }
  
        seo {
          title
          description
          keywords
          
        }
      }
    }
  `;
};
