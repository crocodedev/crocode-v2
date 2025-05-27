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
      internalTitle: 'linkInternal.reference.title',
      externalLabel: 'linkExternal.label',
      externalHref: 'linkExternal.text',
    },
    prepare({internalLabel, internalTitle, externalLabel, externalHref}) {
      return {
        title: internalLabel ?? internalTitle ?? externalLabel,
        subtitle: internalTitle ?? externalHref,
      }
    },
  },
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
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
