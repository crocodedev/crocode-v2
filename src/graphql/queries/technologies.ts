export const ALL_TECHNOLOGIES = `
query { 
		allTechnologies {
				categories{
          title
          slug
          technologiesList{
            title
            technologyImage{
              image{
                asset{
                  url
                }
              }
              altText
            }
          }
        }
  			sectionTitle
      }
    }
`;
