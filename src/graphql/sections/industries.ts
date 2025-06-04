import * as graphqlBlocks from '@/graphql/objects';

const industries = `
    ... on Industries {
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

export default industries;
