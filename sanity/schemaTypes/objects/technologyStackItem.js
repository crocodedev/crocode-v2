import {defineField, defineType} from 'sanity'

export default defineType({
  preview: {
    select: {
      title: 'title',
    },
  },

  title: 'Technology stack item',
  name: 'technologyStackItem',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Item image',
      name: 'itemimage',
      type: 'imageWithAlt',
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'link',
    }),
  ],
})
