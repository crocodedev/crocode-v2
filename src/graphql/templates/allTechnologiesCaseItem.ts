import * as graphqlBlocks from '@/graphql/objects';
import * as graphqlSections from '@/graphql/sections';

const allTechnologiesCaseItem = `
  ${graphqlBlocks['seo']}
  _id
  sectionTitle
  slug {
    current
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
    ${graphqlSections['about']}
    ${graphqlSections['textTwo']}
    ${graphqlSections['textThree']}
    ${graphqlSections['blockText']}
  }
`;

export default allTechnologiesCaseItem;
