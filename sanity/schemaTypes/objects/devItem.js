import {defineField} from 'sanity'

export default {
  preview: {
    select: {
      title: 'title',
    },
  },

  title: 'Development item',
  name: 'devItem',
  type: 'object',
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
      title: 'Image',
      name: 'image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'link',
      type: 'link',
    }),
  ],
}
