import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Locale',
  name: 'locale',
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
      title: 'Index',
      name: 'index',
      type: 'string',
    }),
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'imageWithAlt',
    }),
  ],
})
