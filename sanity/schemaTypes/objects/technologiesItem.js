import {defineField, defineType} from 'sanity'

export default defineType({
  preview: {
    select: {
      title: 'title',
    },
  },

  title: 'Technologies item',
  name: 'technologiesItem',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Technology image',
      name: 'technologyImage',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'link',
      type: 'link',
    }),
  ],
})
