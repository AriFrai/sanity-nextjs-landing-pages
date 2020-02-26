export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e56b68ec4ef35ff09840de6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-b8fr5q6m',
                  apiId: '5bdb7948-432b-45ee-aeac-6ca589d92f73'
                },
                {
                  buildHookId: '5e56b68e91affaaeebc9d171',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zcr5o8hz',
                  apiId: 'c35f8eca-94b2-47a0-8b6f-6f19caf323d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AriFrai/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zcr5o8hz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
