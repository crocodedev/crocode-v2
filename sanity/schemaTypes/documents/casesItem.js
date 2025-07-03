import {MasterDetailIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'casesItem',
  title: 'Cases item',
  type: 'document',
  icon: MasterDetailIcon,
  preview: {
    select: {
      title: 'title',
    },
  },
  fields: [
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
      type: 'technologiesArray',
    }),
    defineField({
      title: 'Country',
      name: 'country',
      type: 'string',
      initialValue: 'United Kingdom',
      options: {
        list: [
          {title: 'Germany', value: 'Germany'},
          {title: 'United Kingdom', value: 'United Kingdom'},
          {title: 'Denmark', value: 'Denmark'},
          {title: 'USA', value: 'USA'},
          {title: 'Italy', value: 'Italy'},
        ],
      },
    }),
    defineField({
      title: 'Cover image',
      name: 'casesItemImage',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
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
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'imageWithAlt',
        },
      ],
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
    }),
    defineField({
      name: 'service',
      title: 'Service',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
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
  ],
})
