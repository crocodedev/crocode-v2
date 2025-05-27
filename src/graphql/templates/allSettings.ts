import * as graphqlBlocks from '@/graphql/objects';

const langBlock = `
  title
  text
  cookiesName
  clickHere
  buttonText
`;

const allSettings = `
  cookies {
    de {${langBlock}}
    en {${langBlock}}
    pl {${langBlock}}
  }
  siteUrl
  recaptchaKey
  name
  defaultLocale
  locales {
    _key
    title
    index
    icon {
      ${graphqlBlocks['image']}
    }
  }
`;

export default allSettings;
