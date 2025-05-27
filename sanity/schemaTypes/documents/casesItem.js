import {MasterDetailIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'casesItem',
  title: 'Cases item',
  type: 'document',
  icon: MasterDetailIcon,
  preview: {
    select: {
      title: 'sectionTitle',
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
      to: [
        {
          type: 'casesItem',
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
              type: 'casesItem',
            },
          ],
        },
      ],
    }),
    defineField({
      title: 'Section Title',
      name: 'sectionTitle',
      type: 'string',
    }),
    defineField({
      title: 'Title',
      name: 'title',
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
      title: 'Technologies',
      name: 'technologies',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
    defineField({
      title: 'Country',
      name: 'country',
      type: 'reference',
      to: [
        {
          type: 'casesCountry',
        },
      ],
    }),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
    }),
    defineField({
      title: 'Marker',
      name: 'marker',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'link',
    }),
    defineField({
      title: 'Cover image',
      name: 'casesItemImage',
      type: 'imageWithAlt',
    }),
    defineField({
      title: 'Page sections',
      name: 'content',
      type: 'pageContent',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
    }),
  ],
})
