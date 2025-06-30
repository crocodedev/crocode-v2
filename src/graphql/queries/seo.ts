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
      seo{
        titleTemplate
    		title
    		description
    		keywords
    		image{
    		  image{
    		    asset{
    		      url
    		    }
    		  }
    		}
    	ogType
    	twitterCard
      }
    }
  }`;
};

export default getSeoBySlug;
