export const getBreadcrumbs = (
  slug: string,
  variables: 'page' | 'case' | string = 'page',
) => {
  const variant =
    variables === 'page'
      ? 'allPage'
      : variables === 'case'
        ? 'allCasesItem'
        : variables;

  console.log(slug, variant);

  return `
    query {
      ${variant}(where: { slug: { current: { eq: "${slug}" } } }) {
        title
        slug { current }
        breadcrumbs {
          linkInternal {
            label
            reference {
              slug { current }
            }
          }
        }
      }
    }
  `;
};
