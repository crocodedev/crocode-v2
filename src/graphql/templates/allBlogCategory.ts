import * as graphqlBlocks from '@/graphql/objects';
import * as graphqlSections from '@/graphql/sections';

const allBlogCategory = `
  ${graphqlBlocks['seo']}
  _id
  title
  position
  component
  numberOfPosts
  sections {
    ${graphqlSections['footer']}
    ${graphqlSections['header']}
    ${graphqlSections['ctaForm']}
    ${graphqlSections['contactUs']}
  }
  slug {
    current
  }
  breadcrumbs {
    ${graphqlBlocks['link']}
  }
  articleSeparator {
    bgColor
    buttonText
    component
    title
    position
    messagePlaceholder
  }
`;

export default allBlogCategory;
