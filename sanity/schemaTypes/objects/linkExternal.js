import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'External',
  name: 'external',
  description: 'Use this to link to an external website',
  type: 'object',
  hidden: ({parent, value}) => !value && parent?.internal,
  fields: [
    defineField({
      title: 'Label',
      name: 'label',
      type: 'string',
    }),
    defineField({
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https', 'mailto', 'tel']}),
    }),
    defineField({
      title: 'Open in new tab',
      name: 'blank',
      type: 'boolean',
    }),
  ],
})
