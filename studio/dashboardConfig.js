export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62286cd82adcd30c40bad2ca',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ykwgxgmk',
                  apiId: '8bee95cf-0def-46d9-ad57-1bc8160f9ecb'
                },
                {
                  buildHookId: '62286cd82adcd30e0abad300',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1itb112e',
                  apiId: '1ac8a86e-f484-4433-8276-5dc5391c29f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/senakster/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1itb112e.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
