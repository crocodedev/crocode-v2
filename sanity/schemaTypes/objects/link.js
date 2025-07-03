import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: LinkIcon,
  preview: {
    select: {
      internalLabel: 'linkInternal.label',
      externalLabel: 'linkExternal.label',
    },
    prepare({internalLabel, externalLabel}) {
      return {
        title: internalLabel ?? externalLabel,
      }
    },
  },
  fields: [
    defineField({
      title: 'Link Internal',
      name: 'linkInternal',
      type: 'internal',
    }),
    defineField({
      title: 'Link External',
      name: 'linkExternal',
      type: 'external',
    }),
    defineField({
      title: 'Pdf',
      name: 'pdf',
      type: 'file',
    }),
  ],
})
