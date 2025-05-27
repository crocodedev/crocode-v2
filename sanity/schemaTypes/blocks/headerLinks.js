import {defineType} from 'sanity'

export default defineType({
  name: 'headerLinks',
  title: 'Header links',
  type: 'array',
  of: [
    defineType({
      name: 'link',
      type: 'url',
      title: 'Link',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
