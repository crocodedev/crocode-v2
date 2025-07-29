import seo from '../objects/seo';

const getSeoBySlug = (slug: string | string[] | undefined): string => {
  return `
     query {
      allRedirect {
      fromPath
      toPath
      statusCode
      ignoreCase
      redirectInBrowser
    }
    allPage(where: { slug: { current: { eq: "${slug}" } } }) {
      ${seo}
    }
  }`;
};

export default getSeoBySlug;
