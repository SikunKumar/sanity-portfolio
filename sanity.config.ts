import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Next.js Site',

  projectId: '20zg91hp',
  dataset: 'production',
  basePath: "/studio",
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})