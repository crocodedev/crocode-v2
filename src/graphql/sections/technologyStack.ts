import * as graphqlBlocks from '@/graphql/objects';

const technologyStack = `
    ... on TechnologyStack {
      _id
      position
      component
      title
      items {
        _key
        title
        itemimage {
          ${graphqlBlocks['image']}
        }
        link{
          ${graphqlBlocks['link']}
        }
      }
    }
`;

export default technologyStack;
