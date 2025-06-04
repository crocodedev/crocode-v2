import * as graphqlBlocks from '@/graphql/objects';
import * as graphqlSections from '@/graphql/sections';

const allCasesItem = `
  _updatedAt
  _createdAt
  ${graphqlBlocks['seo']}
  _id
  sectionTitle
  title
  slug {
    current
  }
  technologies
  country {
    _id
  }
  text
  marker
  link {
    ${graphqlBlocks['link']}
  }
  casesItemImage {
    ${graphqlBlocks['image']}
  }
  content {
    ${graphqlSections['benefits']}
    ${graphqlSections['relatedArticles']}
    ${graphqlSections['caseStudies']}
    ${graphqlSections['challenge']}
    ${graphqlSections['contacts']}
    ${graphqlSections['contactUs']}
    ${graphqlSections['ctaForm']}
    ${graphqlSections['ctaImage']}
    ${graphqlSections['ctaText']}
    ${graphqlSections['development']}
    ${graphqlSections['faq']}
    ${graphqlSections['footer']}
    ${graphqlSections['header']}
    ${graphqlSections['hero']}
    ${graphqlSections['heroProject']}
    ${graphqlSections['industries']}
    ${graphqlSections['notFound']}
    ${graphqlSections['ourClients']}
    ${graphqlSections['ourTeam']}
    ${graphqlSections['reviews']}
    ${graphqlSections['sliderSteps']}
    ${graphqlSections['technologies']}
    ${graphqlSections['technologyStack']}
    ${graphqlSections['textOne']}
    ${graphqlSections['textTwo']}
    ${graphqlSections['textThree']}
    ${graphqlSections['blockText']}
  }
`;

export default allCasesItem;
