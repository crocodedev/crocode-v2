import {defineField, defineType} from 'sanity'

export default defineType({
  preview: {
    select: {
      title: 'title',
    },
  },

  title: 'Social icons item',
  name: 'socialIconsItem',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Icon image',
      name: 'iconImage',
      type: 'imageWithAlt',
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'link',
    }),
  ],
})
