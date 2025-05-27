import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactUs',
  title: 'Contact us',
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
      initialValue: 'ContactUs',
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
      name: 'nameText',
      title: 'Name text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'namePlaceholder',
      title: 'Name placeholder',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emailText',
      title: 'Email text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emailPlaceholder',
      title: 'Email placeholder',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phoneText',
      title: 'Phone text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'messageText',
      title: 'Message text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'messagePlaceholder',
      title: 'Message placeholder',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'messageIcon',
      title: 'Message icon',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageWithAlt',
      description: 'Photo of company manager',
    }),
    defineField({
      name: 'imageTitle',
      title: 'Image title',
      type: 'string',
      description: 'Name and surname of team member',
    }),
    defineField({
      name: 'imageSubtitle',
      title: 'Image subtitle',
      type: 'string',
      description: 'Post of team member',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'agreementText',
      title: 'Agreement text',
      type: 'textItem',
    }),
  ],
})
