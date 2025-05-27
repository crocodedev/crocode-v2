import * as graphqlBlocks from '@/graphql/objects';

const ctaText = `
    ... on CtaText {
      _id
      position
      component
      subtitle
      title
      link {
        ${graphqlBlocks['link']}
      }
      bgColor
    }
`;

export default ctaText;
