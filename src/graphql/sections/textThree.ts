import * as graphqlBlocks from '@/graphql/objects';

const textThree = `
    ... on TextThree {
      _id
      position
      component
      title
      subtitle
      text
      bgColor
      image{
        ${graphqlBlocks['image']}
      }
    }
`;

export default textThree;
