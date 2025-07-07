export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('articlesItem').title('Articles'),
      S.documentTypeListItem('casesItem').title('Projects'),
      S.documentTypeListItem('technologies').title('Technologies'),

      S.documentTypeListItem('redirect').title('Redirects'),

      S.listItem()
        .title('Settings')
        .id('settings')
        .child(S.document().schemaType('settings').title('Global Settings').documentId('settings')),
    ])
