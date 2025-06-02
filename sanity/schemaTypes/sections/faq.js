import {defineField, defineType} from 'sanity'
import bgColors from '../objects/bgColors'

export default defineType({
  name: 'faq',
  title: 'FAQ',
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
      initialValue: 'FAQ',
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'faqItem'}],
    }),
    defineField({
      name: 'bgColor',
      title: 'Background color',
      type: 'string',
      options: {
        list: [...bgColors],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
