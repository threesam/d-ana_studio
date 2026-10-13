import {defineField, defineType} from 'sanity'

// One page of the site. The intro is hers to write; the note never leaves the Studio.
export default defineType({
  name: 'year',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      type: 'number',
      validation: (rule) => rule.required().integer().min(1990).max(2100),
    }),
    defineField({
      name: 'intro',
      description: 'A sentence or two that opens the year page. Shown on the site.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'note',
      title: 'Working note',
      description: 'A summary of the year made by the import, to write the intro from. Not shown.',
      type: 'text',
      rows: 3,
    }),
  ],
  orderings: [{title: 'Newest first', name: 'yearDesc', by: [{field: 'year', direction: 'desc'}]}],
  preview: {
    select: {year: 'year', intro: 'intro'},
    prepare({year, intro}) {
      return {title: String(year ?? 'Year'), subtitle: intro}
    },
  },
})
