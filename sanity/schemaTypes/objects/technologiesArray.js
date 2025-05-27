import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Technologies array',
  name: 'technologiesArray',
  type: 'array',
  of: [
    defineField({
      type: 'technologiesItem',
    }),
  ],
})
