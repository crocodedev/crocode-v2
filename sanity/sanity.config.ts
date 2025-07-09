import {defineConfig} from 'sanity'
import {schemaTypes} from './schemaTypes/index'
import {structure} from './structure'
import {deskTool} from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'crocode-v2',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [
    deskTool({
      structure,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
