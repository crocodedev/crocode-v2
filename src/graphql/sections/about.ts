import * as graphqlBlocks from '@/graphql/objects';

const about = `
    ... on About {
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

export default about;
