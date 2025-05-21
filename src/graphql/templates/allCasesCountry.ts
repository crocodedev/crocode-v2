import * as graphqlBlocks from '@/graphql/objects';
import * as graphqlSections from '@/graphql/sections';

const allCasesCountry = `
  ${graphqlBlocks['seo']}
  _id
  i18n_lang
  sectionTitle
  numberOfPosts
  title
  component
  position
  slug {
    current
  }
  breadcrumbs {
    ${graphqlBlocks['link']}
  }
  articleSeparator {
    position
    sectionTitle
    title
    component
    bgColor
    buttonText
    _id
    messagePlaceholder
  }
  sections {
    ${graphqlSections['footer']}
    ${graphqlSections['header']}
    ${graphqlSections['ctaForm']}
    ${graphqlSections['contactUs']}
  }
`;

export default allCasesCountry;
