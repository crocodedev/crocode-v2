import * as graphqlBlocks from '@/graphql/objects';

const notFound = `
    ... on NotFound {
      _id
      position
      component
      subtitle
      image {
        ${graphqlBlocks['image']}
      }
      text
      link {
        ${graphqlBlocks['link']}
      }
    }
`;

export default notFound;
