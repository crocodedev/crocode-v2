import {defineField, defineType} from 'sanity'

export default defineType({
  preview: {
    select: {
      internalLabel: 'link.linkInternal.label',
      externalLabel: 'link.linkExternal.label',
    },
    prepare({internalLabel, externalLabel}) {
      return {
        title: internalLabel ?? externalLabel,
      }
    },
  },

  title: 'Social icons item',
  name: 'socialIconsItem',
  type: 'object',
  fields: [
    defineField({
      title: 'Icon image',
      name: 'iconImage',
      type: 'imageWithAlt',
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'link',
    }),
  ],
})
