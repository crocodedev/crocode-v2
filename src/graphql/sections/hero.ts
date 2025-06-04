import * as graphqlBlocks from '@/graphql/objects';

const hero = `
        ... on Hero {
          _id
          position
          component
          title
          imageWithAltText {
            ${graphqlBlocks['image']}
          }
          breadcrumbs {
            ${graphqlBlocks['link']}
          }
        }
`;

export default hero;
