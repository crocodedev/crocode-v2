import * as graphqlBlocks from '@/graphql/objects';

const contacts = `
    ... on Contacts {
      _id
      position
      component
      title
      subtitle
      image {
        ${graphqlBlocks['image']}
      }
      popUpText
      styleLink
      accessToken
      contactItems {
        _key
        title
        contactIcon {
          ${graphqlBlocks['image']}
        }
        itemLink {
          ${graphqlBlocks['link']}
        }
      }
    }
`;

export default contacts;
