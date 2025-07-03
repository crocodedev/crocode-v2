import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Technologies array',
  name: 'technologiesArray',
  type: 'array',
  of: [
    defineField({
      type: 'object',
      name: 'technologiesItem',
      title: 'Technologies item',
      preview: {
        select: {
          title: 'title',
        },
      },
      fields: [
        defineField({
          title: 'Title',
          name: 'title',
          type: 'string',
        }),
        defineField({
          title: 'Technology image',
          name: 'technologyImage',
          type: 'imageWithAlt',
        }),
      ],
    }),
  ],
})
