import {defineType} from 'sanity'

export default defineType({
  name: 'itemsSteps',
  title: 'Items steps',
  type: 'array',
  of: [
    {
      type: 'imageWithAlt',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
