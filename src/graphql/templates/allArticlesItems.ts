import * as graphqlBlocks from '@/graphql/objects';
import * as graphqlSections from '@/graphql/sections';

const allArticlesItems = `
  ${graphqlBlocks['seo']}
  _id
  date
  title
  i18n_lang
  position
  component
  author
  sharedText
  desc
  buttonTitle
  slug {
    current
  }
  breadcrumbs {
    ${graphqlBlocks['link']}
  }
  categoryReference {
    _id
  }
  coverImage {
    ${graphqlBlocks['image']}
  }
  sections {
    ${graphqlSections['footer']}
    ${graphqlSections['header']}
    ${graphqlSections['ctaForm']}
    ${graphqlSections['contactUs']}
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
  content {
    text
    title
    component
    contentImage {
      ${graphqlBlocks['image']}
    }
  }
`;

export default allArticlesItems;
