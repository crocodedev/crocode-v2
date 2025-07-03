import * as graphqlBlocks from '@/graphql/objects';

const header = `
    ... on Header {
      _id
      position
      component
      logoImage {
        ${graphqlBlocks['image']}
      }

      headerLinks {
        _key
        ${graphqlBlocks['link']}
      }

      headerButton {
        ${graphqlBlocks['link']}
      }
    }
`;

export default header;
