export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d100ebae236569a95033658',
                  title: 'Sanity Studio',
                  name: 'geirman-gatsby-sanity-blog-studio',
                  apiId: '23cc0703-d8ac-4b30-a0e4-2eb59b264312'
                },
                {
                  buildHookId: '5d100eba49b1b1842c478cbd',
                  title: 'Blog Website',
                  name: 'geirman-gatsby-sanity-blog',
                  apiId: '98f4527b-bcae-4fd1-b2d4-40bf03aeca97'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/geirman/geirman-gatsby-sanity-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://geirman-gatsby-sanity-blog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
