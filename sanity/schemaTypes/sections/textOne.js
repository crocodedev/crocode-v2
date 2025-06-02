import {defineType, defineField} from 'sanity'
import bgColors from '../objects/bgColors'
import fadeColors from '../objects/fadeColors'

export default defineType({
  name: 'textOne',
  title: 'Text One',
  type: 'document',
  i18n: true,
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
      initialValue: 'TextOne',
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
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'mobileImage',
      title: 'Image for mobile',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'tabletImage',
      title: 'Image for tablet',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'desktopImage',
      title: 'Image for desktop',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'fadeColor',
      title: 'Fade color',
      type: 'string',
      options: {
        list: [...fadeColors],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bgColor',
      title: 'Background color',
      type: 'string',
      options: {
        list: [...bgColors],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
