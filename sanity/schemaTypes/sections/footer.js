import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
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
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'component',
      title: 'Component',
      type: 'string',
      initialValue: 'Footer',
      readOnly: true,
      hidden: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logoImage',
      title: 'Logo image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright text',
      type: 'string',
    }),
    defineField({
      name: 'socialIcons',
      title: 'Social icons',
      type: 'array',
      of: [{type: 'socialIconsItem'}],
    }),
    defineField({
      name: 'column',
      title: 'Column',
      type: 'array',
      of: [{type: 'columnGroup'}],
    }),
    defineField({
      name: 'bottomLinks',
      title: 'Bottom links',
      type: 'array',
      of: [{name: 'link', type: 'link'}],
    }),
  ],
})
