import seo from '../objects/seo';

export const ITEMS_PER_PAGE = 8;
export const DEFAULT_VALUE_BLOG = 'Latest';

export const ALL_BLOG_ARTICLES = `
   query {
    allArticlesItem{
      _id
      title
      slug { current }
		coverImage{
        altText
        image{
          asset{
            url
          }
        }
      }
    }
  }
`;

export const getBlogArticle = (slug: string) => `
  query {
    allArticlesItem(where: { slug: { current: { matches: "${slug}" } } }) {
    ${seo}
      _id
      title
      slug { current }
      breadcrumbs {
        _key
      	linkInternal {
          label
          reference {
            slug {
              current
            }
          }
        }
        linkExternal {
          label
          href
          blank
        }
      }
			coverImage{
        altText
        image{
          asset{
            url
          }
        }
      }
    	author
    	date
    	desc
    	category
    	contentRaw
    	socials {
        iconImage {
					image {
            asset {
              url
            }
          }
          altText
        }
        link {
          linkInternal {
          label
          reference {
            slug {
              current
            }
          }
        }
        	linkExternal {
          label
          href
          blank
        }
        }
      }
    }
  }
`;

export const getBlogArticles = (
  limit: number = ITEMS_PER_PAGE,
  offset: number = 0,
  category?: string,
) => {
  let filter = '';
  if (category) {
    const categories = category.split(',').map((c) => c.trim());
    if (categories.length > 1) {
      filter += `{ category: { in: [${categories.map((c) => `"${c}"`).join(', ')}] } }`;
    } else {
      filter += `{ category: { eq: "${categories[0]}" } }`;
    }
  }

  const where = filter ? `where: ${filter},` : '';

  console.log(`(${where} limit: ${limit}, offset: ${offset})`);

  return `
    query {
      allArticlesItem(${where} limit: ${limit}, offset: ${offset}) {
        _id
        category
        slug { current }
	    coverImage{
          altText
          image{
            asset{
              url
            }
          }
        }
    }
}
  `;
};
