export default {
  name: 'link',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      options: {
        list: [
          {title: 'facebook', value: 'facebook'},
          {title: 'tiktok', value: 'tiktok'},
          {title: 'instagram', value: 'instagram'},
          {title: 'linkedin', value: 'linkedin'},
          {title: 'website', value: 'website'},
          {title: 'imdb', value: 'imdb'},
          {title: 'youtube', value: 'youtube'},
          {title: 'backstage', value: 'backstage'},
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'href',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
