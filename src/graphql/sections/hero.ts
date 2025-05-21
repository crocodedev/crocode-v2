import * as graphqlBlocks from '@/graphql/objects';

const hero = `
        ... on Hero {
          _id
          position
          component
          title
          subtitle
          richTextBlockRaw
          fadeColor
          imageWithAltText {
            ${graphqlBlocks['image']}
          }
          breadcrumbs {
            ${graphqlBlocks['link']}
          }
          portfolio {
            ${graphqlBlocks['imagePortfolio']}
          }
        }
`;

export default hero;
