import * as graphqlBlocks from '@/graphql/objects';

const header = `
    ... on Header {
      touchUsModal {
        buttonText
        emailPlaceholder
        subtitle
        namePlaceholder
        title
        yourEmail
        yourName
        agreementText {
          text
          link {
            ${graphqlBlocks['link']}
          }
        }
      }
      _id
      position
      component
      logoImage {
        ${graphqlBlocks['image']}
      }

      linkWithIcon {
        icon {
          ${graphqlBlocks['image']}
        }

        link {
          ${graphqlBlocks['link']}
        }
      }

      headerLinks {
        _key
        ${graphqlBlocks['link']}
      }

      headerButton {
        ${graphqlBlocks['link']}
      }
    }
`;

export default header;
