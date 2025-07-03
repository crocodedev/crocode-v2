import * as graphqlBlocks from '@/graphql/objects';

const reviews = `
    ... on Reviews {
      _id
      position
      component
      title
      subtitle
      items {
        _key
        title
        subtitle
        date
        rating
        text
        userPhoto {
          ${graphqlBlocks['image']}
        }
      }
    }
`;

export default reviews;
