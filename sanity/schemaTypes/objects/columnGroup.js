import {defineField} from 'sanity'

export default {
  preview: {
    select: {
      title: 'title',
    },
  },

  title: 'Column group',
  name: 'columnGroup',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'link',
    }),
    defineField({
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [{type: 'columnLinksItem'}],
    }),
  ],
}
