import {defineField, defineType} from 'sanity'
import bgColors from '../objects/bgColors'

export default defineType({
  name: 'ctaForm',
  title: 'CTA Form',
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
      initialValue: 'CtaForm',
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
      name: 'messagePlaceholder',
      title: 'Message placeholder',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
    defineField({
      name: 'buttonText',
      title: 'Button text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
