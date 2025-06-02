import {MasterDetailIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'articlesItem',
  title: 'Articles item',
  type: 'document',
  icon: MasterDetailIcon,
  i18n: {
    fieldNames: {
      lang: 'i18n_lang',
      baseReference: 'i18n_base',
      references: 'i18n_refs',
    },
  },
  preview: {
    select: {
      title: 'title',
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
      to: [{type: 'articlesItem'}],
      hidden: true,
    }),
    defineField({
      name: 'i18n_refs',
      type: 'array',
      hidden: true,
      of: [
        {
          type: 'reference',
          to: [{type: 'articlesItem'}],
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
      title: 'Category reference',
      name: 'categoryReference',
      type: 'reference',
      to: [{type: 'blogCategory'}],
    }),
    defineField({
      title: 'Position',
      name: 'position',
      type: 'string',
    }),
    defineField({
      title: 'Component',
      name: 'component',
      type: 'string',
      initialValue: 'ArticlesItem',
      hidden: true,
      readOnly: true,
      validation: (Rule) => Rule.required(),
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
      title: 'Sections',
      name: 'sections',
      type: 'blogContent',
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'contentItem'}],
    }),
    defineField({
      title: 'Cover image',
      name: 'coverImage',
      type: 'imageWithAlt',
    }),
    defineField({
      title: 'Date',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'DD-MMM-YYYY',
      },
    }),
    defineField({
      title: 'Author name',
      name: 'author',
      type: 'string',
    }),
    defineField({
      title: 'Share button text',
      name: 'sharedText',
      type: 'string',
    }),
    defineField({
      title: 'Button title',
      name: 'buttonTitle',
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'desc',
      type: 'text',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
    }),
  ],
})
