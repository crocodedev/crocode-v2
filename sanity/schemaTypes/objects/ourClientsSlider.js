import {defineField, defineType} from 'sanity'

export default defineType({
  preview: {
    select: {
      title: 'title',
    },
  },

  title: 'Our clients slider',
  name: 'ourClientsSlider',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Clients list',
      name: 'clientsList',
      type: 'ourClientsArray',
    }),
  ],
})
