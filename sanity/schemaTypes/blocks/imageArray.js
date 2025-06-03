import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageArray',
  title: 'Image array',
  type: 'object',
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
  preview: {
    select: {
      title: 'title',
    },
  },
})
