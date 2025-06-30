export const ITEMS_PER_PAGE = 8;

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

      seo {
        title
        description
        keywords
      }
    }
  }
`;

export const getBlogArticle = (slug: string) => `
  query {
    allArticlesItem(where: { slug: { current: { matches: "${slug}" } } }) {
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
        seo {
          title
          description
          keywords
        }
    	author
    	content{
        title
        text
        contentImage{
          altText
          image{
            asset{
              url
            }
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
      filter += `categoryReference: { title: { in: [${categories.map((c) => `"${c}"`).join(', ')}] } },`;
    } else {
      filter += `categoryReference: { title: { eq: "${categories[0]}" } },`;
    }
  }

  const where = filter ? `where: { ${filter} }` : '';

  return `
    query {
      allArticlesItem(${where} limit: ${limit}, offset: ${offset}) {
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
        seo {
          title
          description
          keywords
        }
    }
}
  `;
};
