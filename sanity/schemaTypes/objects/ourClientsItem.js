import {defineField, defineType} from 'sanity'

export default defineType({
  preview: {
    select: {
      title: 'title',
    },
  },

  title: 'Our clients item',
  name: 'ourClientsItem',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Client photo',
      name: 'clientPhoto',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'link',
      type: 'link',
    }),
  ],
})
