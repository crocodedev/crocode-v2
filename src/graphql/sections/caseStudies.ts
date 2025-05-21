import * as graphqlBlocks from '@/graphql/objects';

const caseStudies = `
    ... on CaseStudies {
      _id
      subtitle
      title
      position
      component
      link {
        ${graphqlBlocks['link']}
      }
      items {
        _id
        text
        title
        slug {
          current
        }
        marker
        casesItemImage {
          ${graphqlBlocks['image']}
        }
      }
    }
`;

export default caseStudies;
