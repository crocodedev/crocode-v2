export const ITEMS_PER_PAGE = 6;
export const DEFAULT_VALUE_ALL_COUNTRY = 'All Country';

export const ALL_CASES_ITEMS = `
  query {
    allCasesItem {
      _id
      title
      country
      technologiesList {
        title
        icon {
          asset {
            url
          }
        }
      }
      slug { current }
      technologiesList {
        title
        icon {
          asset {
            url
          }
        }
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
      country
      technologiesList {
        title
        icon {
          asset {
            url
          }
        }
      }
      duration
      service
      industry
      casesItemImage {
        image {
          asset {
            url
            altText
          }
        }
      }
      images {
        image {
          asset {
            url
            altText
          }
        }
      }
      contentRaw
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
    filter += `country: { eq: "${country}" },`;

  const where = filter ? `where: { ${filter} }` : '';

  return `
    query {
      allCasesItem(${where} limit: ${limit}, offset: ${offset}) {
        _id
        title
        country
        technologiesList {
        title
        icon {
          asset {
            url
          }
        }
      }
        slug { current }
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
