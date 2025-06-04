import {CogIcon} from '@sanity/icons'

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  preview: {
    select: {
      title: 'name',
    },
  },
  fields: [
    {
      title: 'Site name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Site url',
      name: 'siteUrl',
      type: 'string',
    },
    {
      title: 'Recaptcha key',
      name: 'recaptchaKey',
      type: 'string',
    },
    {
      title: 'Cookies',
      name: 'cookies',
      type: 'cookies',
    },
    {
      name: 'touchUsModal',
      title: 'Touch Us',
      type: 'touchUs',
    },
  ],
}
