import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'ListItem',
  name: 'listItem',
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
    defineField({
      title: 'Image With Alt Text',
      name: 'imageWithAltText',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'link',
      type: 'link',
    }),
  ],
})
