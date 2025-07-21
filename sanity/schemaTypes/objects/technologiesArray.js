import {defineType} from 'sanity'

export const technologiesItem = {
  name: 'technologiesItem',
  title: 'Technology Item',
  type: 'object',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'icon', type: 'image', title: 'Icon'},
  ],
}

export default defineType({
  title: 'Technologies array',
  name: 'technologiesArray',
  type: 'array',
  of: [{type: 'technologiesItem'}],
})
