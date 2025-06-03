import {defineField, defineType} from 'sanity'

export default defineType({
  preview: {
    select: {
      title: 'title',
    },
  },

  title: 'Technology category',
  name: 'technologyCategory',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'string',
    }),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
    }),
    defineField({
      title: 'Technologies list',
      name: 'technologiesList',
      type: 'technologiesArray',
    }),
  ],
})
