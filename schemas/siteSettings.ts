export default {
  name: 'siteSettings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'image',
      type: 'image',
      description: 'main branding',
    },
    {
      name: 'description',
      type: 'text',
      description: 'Describe this site for search engines and social media.',
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
      name: 'icons',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'founder',
      type: 'reference',
      to: [{type: 'person'}],
    },
  ],
}
