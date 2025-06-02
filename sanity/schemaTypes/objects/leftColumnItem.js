import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'leftColumnItem',
  title: 'Left column item',
  type: 'object',
  preview: {
    select: {
      title: 'title',
    },
  },
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
    }),
  ],
})
