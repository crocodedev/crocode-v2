import {defineField} from 'sanity'

export default {
  preview: {
    select: {
      title: 'title',
    },
  },

  title: 'Content item',
  name: 'contentItem',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Component',
      name: 'component',
      type: 'string',
      options: {
        list: [
          {title: 'Text', value: 'Text'},
          {title: 'Image', value: 'Image'},
        ],
      },
    }),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [
        {
          type: 'text',
        },
      ],
      hidden: (e) => !(e.parent?.component === 'Text'),
    }),
    defineField({
      title: 'Content image',
      name: 'contentImage',
      type: 'imageWithAlt',
      hidden: (e) => !(e.parent?.component === 'Image'),
    }),
  ],
}
