import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Our clients array',
  name: 'ourClientsArray',
  type: 'array',
  of: [
    defineField({
      type: 'ourClientsItem',
    }),
  ],
})
