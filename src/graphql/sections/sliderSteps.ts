import * as graphqlBlocks from '@/graphql/objects';

const sliderSteps = `
    ... on SliderSteps {
      _id
      position
      component
      subtitle
      title
      itemsSteps {
        _key
        title
        text
        image {
          ${graphqlBlocks['image']}
        }
      }
    }
`;

export default sliderSteps;
