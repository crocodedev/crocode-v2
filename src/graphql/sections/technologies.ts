import * as graphqlBlocks from '@/graphql/objects';

const technologies = `
    ... on Technologies {
      _id
      position
      component
      title
      subtitle
      categories {
        title
        slug
        text
        _key
        technologiesList {
          title
          _key
          technologyImage {
            ${graphqlBlocks['image']}
          }
          link {
            ${graphqlBlocks['link']}
          }
        }
      }
      breadcrumbs {
        ${graphqlBlocks['link']}
      }
    }
`;

export default technologies;
