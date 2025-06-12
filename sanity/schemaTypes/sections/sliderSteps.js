import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'sliderSteps',
  title: 'Slider steps',
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
      initialValue: 'SliderSteps',
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
      name: 'itemsSteps',
      title: 'Items steps',
      type: 'array',
      of: [{type: 'textItemSteps'}],
    }),
  ],
})
