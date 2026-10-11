import {defineArrayMember, defineField, defineType} from 'sanity'

// One piece: an Instagram post or story from the archive, later an essay or a campaign day.
export default defineType({
  name: 'post',
  title: 'Piece',
  type: 'document',
  fields: [
    defineField({
      name: 'visibility',
      description: 'The site only shows pieces marked Shown.',
      type: 'string',
      options: {
        list: [
          {title: 'Shown', value: 'shown'},
          {title: 'Hidden', value: 'hidden'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'shown',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      description: 'Optional. Pieces from the archive have none.',
      type: 'string',
    }),
    defineField({
      name: 'handle',
      description: 'The last part of the address.',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'kind',
      type: 'string',
      options: {
        list: [
          {title: 'Post', value: 'post'},
          {title: 'Story', value: 'story'},
          {title: 'Reel', value: 'reel'},
          {title: 'Essay', value: 'essay'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'essay',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'First published',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'day',
      description: 'The calendar day the piece sits under on its year page.',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'text',
      description: 'The caption, or the words written on the story.',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'images',
      title: 'Photographs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative text',
              description: 'What the photograph shows, for someone who cannot see it.',
              type: 'string',
              validation: (rule) => rule.required().warning('Every photograph needs a description'),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'body',
      description: 'Long writing. Leave empty for a photograph with a caption.',
      type: 'blockContent',
    }),
    defineField({
      name: 'themes',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'theme'}]})],
    }),
    defineField({
      name: 'flags',
      description: 'Facts about the piece. Pieces showing children start out hidden.',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {
        list: [
          {title: 'Shows children', value: 'kids'},
          {title: "Someone else's work", value: 'reshare'},
          {title: 'Has video', value: 'video'},
        ],
      },
    }),
    defineField({
      name: 'subjects',
      description: 'What the photographs show.',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {
        list: [
          'self',
          'partner',
          'family',
          'friends',
          'nature',
          'plants',
          'food-drink',
          'home',
          'city',
          'travel',
          'art-culture',
          'pets',
          'text',
          'event',
          'other',
        ],
      },
    }),
    defineField({
      name: 'people',
      description: 'Accounts tagged in the piece, written as @name.',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'place',
      type: 'object',
      fields: [
        defineField({name: 'name', type: 'string'}),
        defineField({name: 'city', type: 'string'}),
        defineField({
          name: 'point',
          description: 'Rounded to about one kilometre. Never an exact address.',
          type: 'geopoint',
        }),
      ],
    }),
    defineField({
      name: 'externalId',
      title: 'Archive id',
      description: 'Where the piece came from. Set by the import.',
      type: 'string',
      readOnly: true,
    }),
  ],
  orderings: [
    {title: 'Newest first', name: 'dayDesc', by: [{field: 'publishedAt', direction: 'desc'}]},
    {title: 'Oldest first', name: 'dayAsc', by: [{field: 'publishedAt', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', text: 'text', day: 'day', visibility: 'visibility', media: 'images.0'},
    prepare({title, text, day, visibility, media}) {
      return {
        title: title || text || 'Untitled',
        subtitle: [day, visibility].filter(Boolean).join(', '),
        media,
      }
    },
  },
})
