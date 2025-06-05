import * as graphqlBlocks from '@/graphql/objects';
import * as graphqlSections from '@/graphql/sections';

const allPage = `
  ${graphqlBlocks['seo']}
  title
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
    ${graphqlSections['offerings']}
  }
`;

export default allPage;
