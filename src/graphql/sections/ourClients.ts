import * as graphqlBlocks from '@/graphql/objects';

const ourClients = `
    ... on OurClients {
      _id
      position
      component
      title
      subtitle
      sliders {
        _key
        clientsList {
          _key
          clientPhoto {
            ${graphqlBlocks['image']}
          }
          link {
            ${graphqlBlocks['link']}
          }
        }
      }
    }
`;

export default ourClients;
