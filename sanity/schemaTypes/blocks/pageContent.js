import {defineType} from 'sanity'

export default defineType({
  name: 'pageContent',
  title: 'Page sections',
  type: 'array',
  of: [
    defineType({
      type: 'pageSection',
    }),
  ],
})
