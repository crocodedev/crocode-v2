import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'offerings',
  title: 'Offerings',
  type: 'document',
  preview: {
    select: {
      title: 'sectionTitle',
    },
  },
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'component',
      title: 'Component',
      type: 'string',
      initialValue: 'OfferingsTemplate',
      readOnly: true,
      hidden: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'positionOfTitle',
      title: 'position of Title',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
        ],
      },
      initialValue: 'Left',
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: 'items',
    //   title: 'Items',
    //   type: 'array',
    //   of: [{type: 'string', name: 'title', title: 'Title'}],
    // }),
  ],
})
