import {defineType} from 'sanity'

export default defineType({
  name: 'textItemSteps',
  title: 'Text item steps',
  type: 'object',
  preview: {
    select: {
      title: 'title',
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
    {
      name: 'image',
      title: 'Image',
      type: 'imageWithAlt',
    },
  ],
})
