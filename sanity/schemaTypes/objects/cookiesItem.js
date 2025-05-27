import {defineField} from 'sanity'

export default {
  title: 'Cookies item',
  name: 'cookiesItem',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Click here',
      name: 'clickHere',
      type: 'string',
    }),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
    }),
    defineField({
      title: 'Button text',
      name: 'buttonText',
      type: 'string',
    }),
    defineField({
      title: 'Cookies name',
      name: 'cookiesName',
      type: 'string',
    }),
  ],
}
