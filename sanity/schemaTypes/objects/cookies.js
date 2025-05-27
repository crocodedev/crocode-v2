import {defineField} from 'sanity'

export default {
  title: 'Cookies',
  name: 'cookies',
  type: 'object',
  fields: [
    defineField({
      title: 'Cookies English',
      name: 'en',
      type: 'cookiesItem',
    }),
    defineField({
      title: 'Cookies Deutch',
      name: 'de',
      type: 'cookiesItem',
    }),
    defineField({
      title: 'Cookies Polish',
      name: 'pl',
      type: 'cookiesItem',
    }),
  ],
}
