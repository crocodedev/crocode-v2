import hero from './schemaTypes/sections/hero'
import heroProject from './schemaTypes/sections/heroProject'
import industries from './schemaTypes/sections/industries'
import about from './schemaTypes/sections/about'
import textTwo from './schemaTypes/sections/textTwo'
import textThree from './schemaTypes/sections/textThree'
import ctaText from './schemaTypes/sections/ctaText'
import notFound from './schemaTypes/sections/notFound'
import benefits from './schemaTypes/sections/benefits'
import contacts from './schemaTypes/sections/contacts'
import development from './schemaTypes/sections/development'
import ourTeam from './schemaTypes/sections/ourTeam'
import ctaImage from './schemaTypes/sections/ctaImage'
import faq from './schemaTypes/sections/faq'
import sliderSteps from './schemaTypes/sections/sliderSteps'
import ourClients from './schemaTypes/sections/ourClients'
import reviews from './schemaTypes/sections/reviews'
import technologyStack from './schemaTypes/sections/technologyStack'
import caseStudies from './schemaTypes/sections/caseStudies'
import technologies from './schemaTypes/sections/technologies'
import footer from './schemaTypes/sections/footer'
import header from './schemaTypes/sections/header'
import contactUs from './schemaTypes/sections/contactUs'
import ctaForm from './schemaTypes/sections/ctaForm'
import challenge from './schemaTypes/sections/challenge'
import blockText from './schemaTypes/sections/blockText'
import relatedArticles from './schemaTypes/sections/relatedArticles'
import offerings from './schemaTypes/sections/offerings'

const sectionsArray = [
  blockText,
  benefits,
  caseStudies,
  ctaForm,
  ctaText,
  contacts,
  ctaImage,
  challenge,
  contactUs,
  development,
  faq,
  footer,
  header,
  hero,
  heroProject,
  industries,
  notFound,
  ourClients,
  ourTeam,
  reviews,
  sliderSteps,
  technologyStack,
  technologies,
  about,
  textTwo,
  textThree,
  relatedArticles,
  offerings,
]

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('page').title('Pages'),

      S.listItem()
        .title('Sections')
        .child(
          S.list()
            .id('sections')
            .items(
              sectionsArray.map((schema) =>
                S.documentTypeListItem(schema.name).title(schema.title),
              ),
            ),
        ),

      S.documentTypeListItem('blogCategory').title('Blog categories'),
      S.documentTypeListItem('articlesItem').title('Articles'),

      S.documentTypeListItem('casesItem').title('Projects'),

      S.documentTypeListItem('redirect').title('Redirects'),

      S.listItem()
        .title('Settings')
        .id('settings')
        .child(S.document().schemaType('settings').title('Global Settings').documentId('settings')),
    ])
