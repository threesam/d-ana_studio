import {defineType} from 'sanity'

export default defineType({
  name: 'person',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      type: 'image',
    },
    {
      name: 'imageGallery',
      type: 'array',
      of: [{type: 'image', name: 'image'}],
    },
    {
      name: 'bio',
      type: 'blockContent',
    },
    {
      name: 'link',
      description: 'Only one link please',
      type: 'url',
    },
    {
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'link',
          name: 'link',
        },
      ],
    },
    {
      name: 'contact',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
    prepare(selection) {
      const {title, media} = selection
      return Object.assign({}, selection, {
        subtitle: title,
        media,
      })
    },
  },
})
