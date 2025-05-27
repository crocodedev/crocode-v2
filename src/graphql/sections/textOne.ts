import * as graphqlBlocks from '@/graphql/objects';

const textOne = `
    ... on TextOne {
      _id
      position
      component
      title
      subtitle
      text
      bgColor
      fadeColor
      image{
        ${graphqlBlocks['image']}
      }
      tabletImage {
        ${graphqlBlocks['image']}
      }
      mobileImage {
        ${graphqlBlocks['image']}
      }
      desktopImage {
        ${graphqlBlocks['image']}
      }
    }
`;

export default textOne;
