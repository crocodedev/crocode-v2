import * as graphqlBlocks from '@/graphql/objects';

const textTwo = `
    ... on TextTwo {
      _id
      position
      component
      title
      subtitle
      richTextBlockRaw
      text
      bgColor
      image {
        ${graphqlBlocks['image']}
      }
      items {
        _key
        title
        text
      }
    }
`;

export default textTwo;
