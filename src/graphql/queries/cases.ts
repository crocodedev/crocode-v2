export const ITEMS_PER_PAGE = 6;

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

  if (country) {
    const countries = country.split(',').map((c) => c.trim());
    if (countries.length > 1) {
      filter += `country: { title: { in: [${countries.map((c) => `"${c}"`).join(', ')}] } },`;
    } else {
      filter += `country: { title: { eq: "${countries[0]}" } },`;
    }
  }

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
