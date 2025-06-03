import {defineType} from 'sanity'

export default defineType({
  name: 'blogContent',
  title: 'Blog sections',
  type: 'array',
  of: [
    defineType({
      type: 'blogSections',
      title: 'Blog Section',
    }),
  ],
})
