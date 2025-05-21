import * as graphqlBlocks from '@/graphql/objects';

const imageBlock = `
    ... on ImageBlock {
      _id
      position
      component
      title
      altText
      image {
        ${graphqlBlocks['image']}
      }
    }
`;

export default imageBlock;
