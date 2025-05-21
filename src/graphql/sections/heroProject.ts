import * as graphqlBlocks from '@/graphql/objects';

const heroProject = `
  ... on HeroProject {
    _id
    position
    component
    title
    breadcrumbs {
      ${graphqlBlocks['link']}
    }
    projectImage {
      ${graphqlBlocks['image']}
    }
    projectFeatures {
      _key
      title
      text
    }
  }
`;

export default heroProject;
