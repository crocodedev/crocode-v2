import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heroProject',
  title: 'Hero Project',
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
      initialValue: 'HeroProject',
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
      name: 'projectImage',
      title: 'Project image',
      type: 'array',
      of: [{type: 'imageWithAlt'}],
    }),
    defineField({
      name: 'projectFeatures',
      title: 'Project features',
      type: 'array',
      of: [{type: 'heroProjectInfo'}],
    }),
    defineField({
      name: 'breadcrumbs',
      title: 'Breadcrumbs',
      type: 'array',
      of: [{name: 'link', type: 'link'}],
    }),
  ],
})
