import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Internal',
  name: 'internal',
  description: 'Use this to link between pages',
  type: 'object',
  hidden: ({parent, value}) => !value && parent?.external,
  fields: [
    defineField({
      title: 'Label',
      name: 'label',
      type: 'string',
      description: 'Display label will replace reference title if set',
    }),
    defineField({
      title: 'Reference',
      name: 'reference',
      type: 'reference',
      to: [
        {type: 'page'},
        {type: 'blogCategory'},
        {type: 'casesCountry'},
        {type: 'technologiesCaseItem'},
      ],
      options: {
        disableNew: true,
      },
    }),
  ],
})
