import {defineType} from 'sanity'

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
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'position',
      title: 'Position',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'component',
      title: 'Component',
      type: 'string',
      initialValue: 'OfferingsTemplate',
      readOnly: true,
      hidden: true,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'positionOfTitle',
      title: 'Position of Title',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
        ],
      },
      initialValue: 'Left',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'string', name: 'title', title: 'Title'}],
    },
  ],
})
