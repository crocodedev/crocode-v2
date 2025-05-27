import * as graphqlBlocks from '@/graphql/objects';

const heroMain = `
    ... on HeroMain {
      _id
      position
      component
      fadeColor
      items {
        text
        _key
      }
      link {
        ${graphqlBlocks['link']}
      }
      logoImage {
        ${graphqlBlocks['image']}
      }
      bgImage {
        ${graphqlBlocks['image']}
      }
      videoFile {
        ${graphqlBlocks['video']}
      }
    }
`;

export default heroMain;
