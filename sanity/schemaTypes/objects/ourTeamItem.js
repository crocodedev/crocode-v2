import {defineField, defineType} from 'sanity'

export default defineType({
  preview: {
    select: {
      title: 'title',
    },
  },

  title: 'Our team item',
  name: 'ourTeamItem',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      title: 'Team member photo',
      name: 'teamMemberPhoto',
      type: 'imageWithAlt',
    }),
  ],
})
