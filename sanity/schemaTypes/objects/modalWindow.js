import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Modal window',
  name: 'modalWindow',
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
