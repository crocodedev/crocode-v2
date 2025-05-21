import * as graphqlBlocks from '@/graphql/objects';

const development = `
    ... on Development {
      _id
      component
      position
      subtitle
      title
      items {
        _key
        title
        text
        image {
          ${graphqlBlocks['image']}
        }
        link {
          ${graphqlBlocks['link']}
        }
      }
    }
`;

export default development;
