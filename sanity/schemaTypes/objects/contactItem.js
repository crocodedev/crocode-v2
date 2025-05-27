import {defineField} from 'sanity'

export default {
  preview: {
    select: {
      title: 'title',
    },
  },

  title: 'Contact item',
  name: 'contactItem',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Contact icon',
      name: 'contactIcon',
      type: 'imageWithAlt',
    }),
    defineField({
      title: 'Link',
      name: 'itemLink',
      type: 'link',
    }),
  ],
}
