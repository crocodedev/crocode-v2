import * as graphqlBlocks from '@/graphql/objects';

const footer = `
    ... on Footer {
      _id
      position
      component
      copyrightText
      logoImage {
        ${graphqlBlocks['image']}
      }
      socialIcons{
        _key
        iconImage {
          ${graphqlBlocks['image']}
        }
        link{
          ${graphqlBlocks['link']}
        }
      }
      column {
        title
        _key
        link {
            ${graphqlBlocks['link']}
          }
        items {
          _key
          link {
            ${graphqlBlocks['link']}
          }
        }
      }
      bottomLinks {
        ${graphqlBlocks['link']}
        pdf {
          asset {
            url
          }
        }
      }
    }
`;

export default footer;
