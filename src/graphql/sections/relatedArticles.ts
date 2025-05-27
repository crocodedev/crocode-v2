import * as graphqlBlocks from '@/graphql/objects';

const relatedArticles = `
    ... on RelatedArticles {
      _id
      position
      component
      title
      link {
        ${graphqlBlocks['link']}
      }
      items {
        _id
        title
        desc
        slug {
          current
        }
        dateString: date
        coverImage {
          ${graphqlBlocks['image']}
        }
      }
    }
`;

export default relatedArticles;
