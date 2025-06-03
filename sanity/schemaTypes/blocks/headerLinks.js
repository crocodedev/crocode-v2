import {defineType} from 'sanity'

export default defineType({
  name: 'headerLinks',
  title: 'Header links',
  type: 'array',
  of: [
    {
      name: 'link',
      type: 'link',
      title: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
