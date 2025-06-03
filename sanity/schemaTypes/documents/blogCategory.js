import {MasterDetailIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogCategory',
  title: 'Blog Category',
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
      to: [{type: 'blogCategory'}],
      hidden: true,
    }),
    defineField({
      name: 'i18n_refs',
      type: 'array',
      hidden: true,
      of: [
        {
          type: 'reference',
          to: [{type: 'blogCategory'}],
        },
      ],
    }),
    defineField({
      title: 'Section Title',
      name: 'sectionTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      title: 'Position',
      name: 'position',
      type: 'string',
    }),
    defineField({
      title: 'Breadcrumbs',
      name: 'breadcrumbs',
      type: 'array',
      of: [
        {
          name: 'link',
          type: 'link',
        },
      ],
    }),
    defineField({
      title: 'Article separator',
      name: 'articleSeparator',
      type: 'reference',
      to: [
        {
          type: 'ctaForm',
        },
      ],
    }),
    defineField({
      title: 'Number of posts',
      name: 'numberOfPosts',
      type: 'number',
    }),
    defineField({
      title: 'Component',
      name: 'component',
      type: 'string',
      initialValue: 'BlogList',
      readOnly: true,
      hidden: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Sections',
      name: 'sections',
      type: 'blogContent',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
    }),
  ],
})
