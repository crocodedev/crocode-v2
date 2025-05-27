import {MasterDetailIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  icon: MasterDetailIcon,
  preview: {
    select: {
      title: 'fromPath',
    },
  },
  i18n: {
    fieldNames: {
      lang: 'i18n_lang',
      baseReference: 'i18n_base',
      references: 'i18n_refs',
    },
  },
  fields: [
    defineField({
      name: 'i18n_lang',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'i18n_base',
      type: 'reference',
      to: [{type: 'redirect'}],
      hidden: true,
    }),
    defineField({
      name: 'i18n_refs',
      type: 'array',
      hidden: true,
      of: [
        {
          type: 'reference',
          to: [{type: 'redirect'}],
        },
      ],
    }),
    defineField({
      title: 'From Path',
      name: 'fromPath',
      type: 'string',
    }),
    defineField({
      title: 'To Path',
      name: 'toPath',
      type: 'string',
    }),
    defineField({
      title: 'Status Code',
      name: 'statusCode',
      type: 'number',
    }),
    defineField({
      title: 'Force',
      name: 'force',
      type: 'boolean',
    }),
    defineField({
      title: 'Ignore Case',
      name: 'ignoreCase',
      type: 'boolean',
    }),
    defineField({
      title: 'Redirect In Browser',
      name: 'redirectInBrowser',
      type: 'boolean',
    }),
  ],
})
