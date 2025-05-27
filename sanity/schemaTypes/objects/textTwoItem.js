import {defineType} from 'sanity'

export default defineType({
  name: 'textTwoItem',
  title: 'Text two item',
  type: 'object',
  preview: {
    select: {
      title: 'text',
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
  ],
})
