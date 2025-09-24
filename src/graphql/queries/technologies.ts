export const ALL_TECHNOLOGIES = `
  query {
    allTechnologies {
      _id
      title
      slug {
        current
        source
      }
      seo {
        title
        description
        keywords
      }
      breadcrumbs {
        linkInternal {
          label
        }
        linkExternal {
          label
          href
          blank
        }
      }
      contentRaw
      questions {
        question
        answer
      }
      process {
        titleItem
        description
      }
    }
  }
`;

export const getTechnology = (slug: string) => `
  query {
    allTechnologies(where: { slug: { current: { eq: "${slug}" } } }) {
      _id
      title
      slug {
        current
      }
      breadcrumbs {
        linkInternal {
          label
          reference {
            slug {
              current
            }
          }
        }
        linkExternal {
          label
          href
          blank
        }
      }
      contentRaw
      questions {
        question
        answer
      }
      process {
        titleItem
        description
      }
      projects {
        title
        slug {
          current
        }
        casesItemImage {
          image {
            asset {
              url
            }
          }
          altText
        }
      }
    }
  }
`;
