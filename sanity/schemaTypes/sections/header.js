import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
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
      initialValue: 'Header',
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
      name: 'Link',
      type: 'link',
    }),
    defineField({
      name: 'headerLinks',
      title: 'Header links',
      type: 'headerLinks',
    }),
    defineField({
      name: 'headerButton',
      title: 'Header button',
      type: 'link',
    }),
  ],
})
