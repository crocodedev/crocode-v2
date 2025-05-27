import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroMainItem',
  title: 'Hero main item',
  type: 'object',
  preview: {
    select: {
      title: 'text',
    },
  },
  fields: [
    defineField({
      title: 'Text',
      name: 'text',
      type: 'string',
    }),
  ],
})
