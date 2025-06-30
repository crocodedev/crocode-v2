import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'textItem',
  title: 'Text item',
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
      title: 'Link',
      name: 'link',
      type: 'link',
    }),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
    }),
  ],
})
