import {defineField, defineType} from 'sanity'

export default defineType({
  preview: {
    select: {
      title: 'title',
    },
  },

  title: 'Review item',
  name: 'reviewItem',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
    }),
    defineField({
      title: 'User photo',
      name: 'userPhoto',
      type: 'imageWithAlt',
    }),
    defineField({
      title: 'Date',
      name: 'date',
      type: 'string',
    }),
    defineField({
      title: 'Rating',
      name: 'rating',
      type: 'number',
    }),
  ],
})
