import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imagePortfolio',
  title: 'Image Portfolio',
  type: 'object',
  fields: [
    defineField({
      name: 'image1',
      title: 'Image1',
      type: 'image',
    }),
    defineField({
      name: 'altTextImage1',
      title: 'Alt Text Image 1',
      type: 'string',
    }),
    defineField({
      name: 'image2',
      title: 'Image2',
      type: 'image',
    }),
    defineField({
      name: 'altTextImage2',
      title: 'Alt Text Image 2',
      type: 'string',
    }),
    defineField({
      name: 'image3',
      title: 'Image3',
      type: 'image',
    }),
    defineField({
      name: 'altTextImage3',
      title: 'Alt Text Image 3',
      type: 'string',
    }),
    defineField({
      name: 'image4',
      title: 'Image4',
      type: 'image',
    }),
    defineField({
      name: 'altTextImage4',
      title: 'Alt Text Image 4',
      type: 'string',
    }),
    defineField({
      name: 'image5',
      title: 'Image5',
      type: 'image',
    }),
    defineField({
      name: 'altTextImage5',
      title: 'Alt Text Image 5',
      type: 'string',
    }),
  ],
})
