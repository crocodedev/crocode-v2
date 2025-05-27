import {defineField} from 'sanity'

export default {
  preview: {
    select: {
      title: 'title',
    },
  },

  title: 'Paragraph',
  name: 'paragraph',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [{type: 'text'}],
    }),
    defineField({
      title: 'List',
      name: 'list',
      type: 'array',
      of: [{type: 'text'}],
    }),
    defineField({
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
}
