import {defineField, defineType} from 'sanity'

// What a piece is about. The titles are her own phrases.
export default defineType({
  name: 'theme',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'handle',
      description: 'The last part of the address.',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      description: 'A sentence that opens the theme page. Shown on the site.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'note',
      title: 'Working note',
      description: 'How the import decided what belongs here. Not shown.',
      type: 'text',
      rows: 3,
    }),
  ],
})
