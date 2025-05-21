import * as graphqlBlocks from '@/graphql/objects';

const list = `
    ... on List {
      _id
      position
      component
      title
      text
      bgColor
      items {
        _key
        text
        title
        imageWithAltText {
          ${graphqlBlocks['image']}
        }
        link {
          ${graphqlBlocks['link']}
        }
      }
    }
`;

export default list;
