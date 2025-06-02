import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'imageBlock',
  title: 'Image block',
  type: 'document',
  i18n: true,
  preview: {
    select: {
      title: 'title',
    },
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageWithAlt',
    }),
  ],
})
