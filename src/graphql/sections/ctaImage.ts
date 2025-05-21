import * as graphqlBlocks from '@/graphql/objects';

const ctaImage = `
    ... on CtaImage {
      _id
      position
      component
      title
      subtitle
      bgColor
      link {
        ${graphqlBlocks['link']}
      }
      image{
        ${graphqlBlocks['image']}
      }
    }
`;

export default ctaImage;
