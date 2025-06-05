import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'technologies',
  title: 'Technologies',
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
      initialValue: 'Technologies',
      options: {
        list: [
          {title: 'Technologies', value: 'Technologies'},
          {title: 'Technologies Grid', value: 'TechnologiesGrid'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'technologyCategory'}],
    }),
    defineField({
      name: 'breadcrumbs',
      title: 'Breadcrumbs',
      type: 'array',
      of: [{name: 'link', type: 'link'}],
    }),
  ],
})
