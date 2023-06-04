import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
