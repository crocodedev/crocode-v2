import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contacts',
  title: 'Contacts',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'component',
      title: 'Component',
      type: 'string',
      initialValue: 'Contacts',
      readOnly: true,
      hidden: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'popUpText',
      title: 'Pop up text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'styleLink',
      title: 'Style link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'accessToken',
      title: 'Access token',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactItems',
      title: 'Contact items',
      type: 'array',
      of: [{type: 'contactItem'}],
    }),
  ],
})
