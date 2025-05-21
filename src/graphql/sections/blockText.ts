const blockText = `
    ... on BlockText {
          _id
          sectionTitle
          subtitle
          title
          position
          component
          content {
            title
            text
            list
            links
            _key
          }
        }
`;

export default blockText;
