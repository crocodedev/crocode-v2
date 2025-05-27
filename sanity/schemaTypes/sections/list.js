import {defineType, defineField} from 'sanity'
import bgColors from '../objects/bgColors'

export default defineType({
  name: 'list',
  title: 'List',
  type: 'document',
  i18n: true,
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
      options: {
        list: [
          {title: 'List One', value: 'ListOne'},
          {title: 'List Two', value: 'ListTwo'},
          {title: 'List Three', value: 'ListThree'},
          {title: 'List Four', value: 'ListFour'},
          {title: 'List Five', value: 'ListFive'},
          {title: 'List Six', value: 'ListSix'},
          {title: 'List Seven', value: 'ListSeven'},
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
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'listItem'}],
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
