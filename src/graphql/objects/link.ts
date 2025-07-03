const link = `
    _key
    title
    linkExternal {
      blank
      href
      label
    }
    linkInternal {
      label
      reference {
        ... on BlogCategory {
          slug {
            current
          }
        }

        ... on CasesCountry {
          _id
          slug {
            current
          }
        }

        ... on Page {
          slug {
            current
          }
        }

        ... on TechnologiesCaseItem {
          slug {
            current
          }
        }
      }
    }
`;

export default link;
