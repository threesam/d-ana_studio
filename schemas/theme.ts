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
    defineField({name: 'description', type: 'text', rows: 3}),
  ],
})
