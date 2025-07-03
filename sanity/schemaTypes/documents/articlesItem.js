import {MasterDetailIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'articlesItem',
  title: 'Articles item',
  type: 'document',
  icon: MasterDetailIcon,
  preview: {
    select: {
      title: 'title',
    },
  },
  fields: [
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
      title: 'Date',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'DD-MMM-YYYY',
      },
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
      title: 'Description',
      name: 'desc',
      type: 'text',
    }),
    defineField({
      title: 'Cover image',
      name: 'coverImage',
      type: 'imageWithAlt',
    }),
    defineField({
      title: 'Author name',
      name: 'author',
      type: 'string',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
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
      title: 'Category',
      name: 'category',
      type: 'string',
      initialValue: 'Latest',
      options: {
        list: [
          {title: 'Latest', value: 'Latest'},
          {title: 'Technologies', value: 'Technologies'},
          {title: 'UI/UX', value: 'UI/UX'},
          {title: 'Client guides', value: 'Client guides'},
        ],
      },
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
          },
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'H6', value: 'h6'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
        },
        {
          type: 'image',
        },
      ],
    }),
    defineField({
      title: 'Socials',
      name: 'socials',
      type: 'array',
      of: [{type: 'socialIconsItem'}],
    }),
  ],
})
