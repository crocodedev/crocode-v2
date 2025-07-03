import * as graphqlBlocks from '@/graphql/objects';

const challenge = `
    ... on Challenge {
      _id
      position
      title
      subtitle
      component
      modalContent {
        _key
        title
        text
      }
      imagesItem {
        ${graphqlBlocks['image']}
      }
    }
`;

export default challenge;
