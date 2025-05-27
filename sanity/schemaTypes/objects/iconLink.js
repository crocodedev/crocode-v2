import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'iconLink',
  title: 'Icon link',
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
      name: 'link',
      type: 'link',
    }),
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'imageWithAlt',
    }),
  ],
})
