import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const projectId = 'elspywtm'

// Two workspaces over the same schema. New work lands in the private dataset; a piece is
// copied to the public one, which the site reads, once it is cleared to be seen.
const workspace = (name: string, title: string, dataset: string) => ({
  name,
  title,
  basePath: `/${name}`,
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {types: schemaTypes},
})

export default defineConfig([
  workspace('landing', 'd-ana, everything (private)', 'landing'),
  workspace('public', 'd-ana, on the site (public)', 'production'),
])
