import {MasterDetailIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: MasterDetailIcon,
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
      to: [
        {
          type: 'page',
        },
      ],
      hidden: true,
    }),
    defineField({
      name: 'i18n_refs',
      type: 'array',
      hidden: true,
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'page',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'content',
      title: 'Page sections',
      type: 'pageContent',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
    }),
  ],
})
