import {CogIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  preview: {
    select: {
      title: 'name',
    },
  },
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: [/*"create", 'delete',*/ 'update', 'publish'],
  fields: [
    defineField({
      title: 'Site name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Site url',
      name: 'siteUrl',
      type: 'string',
    }),
    defineField({
      title: 'Recaptcha key',
      name: 'recaptchaKey',
      type: 'string',
    }),
    defineField({
      title: 'Default locale',
      name: 'defaultLocale',
      type: 'string',
      options: {
        list: [
          {title: 'English', value: 'en'},
          {title: 'Polish', value: 'pl'},
          {title: 'Deutch', value: 'de'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Locales',
      name: 'locales',
      type: 'array',
      of: [
        {
          type: 'locale',
        },
      ],
    }),
    defineField({
      title: 'Cookies',
      name: 'cookies',
      type: 'cookies',
    }),
  ],
})
