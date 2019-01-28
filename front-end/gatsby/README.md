[![Master Build Status](https://travis-ci.com/miloofcroton/gatsby-homepage.svg?branch=master)](https://travis-ci.com/miloofcroton/)

# My homepage in Gatsby

## Tools

- Client
  - [React](https://reactjs.org/docs/)
  - [Gatsby](https://www.gatsbyjs.org/docs/)
  - [Netlify CMS](https://www.netlifycms.org/)
  - [styled-components](https://www.styled-components.com/docs/)
  - [react-helmet](https://github.com/nfl/react-helmet)
  - [font-awesome](https://github.com/FortAwesome/Font-Awesome)
  - [prop-types](https://github.com/facebook/prop-types)
  - PWA config
- Systems
  - [Netlify](https://www.netlify.com/docs/)
  - [Travis CI](https://travis-ci.com/)
- Node Tools
  - Babel (via gatsby)
  - Webpack (via gatsby)
  - [ESLint](https://eslint.org/docs)
  - [Jest](https://jestjs.io/docs/)
  - [Enzyme](https://airbnb.io/enzyme/docs/api/)
  - [Prettier](https://prettier.io/docs/)

### To add

  - Redux?
  - TypeScript?
  - Storybook?
  - Cypress?
  - material icons?
  - better configs
    - ESlint
    - Babel
    - Webpack
    - Gatsby

### To remove

- lodash

## To improve

- make the work app read and write to url/history
  - might have to move work post pages to different directory in /pages, so I can write to `/pages/<project name>` without conflicting with that actual page on the site, which isn't in the work app
- add menu, search tool, tag list, and categories to 'thoughts' index view
- make the work app muuuuuch more mobile-friendly
- make the profile in the work view be the result of compiled markdown
- make the importing of fontAwesome in the App component conditional (no need to load fontawesome all over the website if it's only used in a few places), or import it just in specific files that use it
- create more reusable components
  - tag style
  - tech/image icon? (or just put those images *in* the bio page directory!)
  - font-awesome? how to call that from markdown? (import in the template, and the dangerously-inserted html will 'just work' with stuff on that page? or does call site matter?)
  - look around for more components to clean up
- Helmet
  - might need to remove some stuff in my Helmet, particularly the favicon stuff as it pertains to what my PWA plugins are doing
- remove example content
- fix how Netlify CMS is saving content
- add some more simple sections, such as a contact form?
- add more content... duh

## Bugs

- getting double error messages for any ESLint issue, eg:
  ```
  [eslint] Missing semicolon. [semi] (19,2)
  [eslint] Missing semicolon. [babel/semi] (19,2)
  ```

## Notes

### Full slice:

- (optional) add links or references to your new page, potentially in the app/header/links component
- add preview data in cms/index and cms/preview-templates
- add a new directory in components for resource name
  - at minimum, adding a preview component is a good idea if you're going to list them on an index page later
- add a new directory in pages for resource name
  - add an index.js file to show previews or whatever you want
  - add a bunch of markdown files for your content
- add a directory in templates for resource name
  - at minimum, have an index.js that exposes a template for your markdown files
- add to static/admin/config.yml with data about your markdown files
- (optional helpers)
  - extract anything you want out to styles folder
  - add any assets to static folder (or something else, potentially)
  - install any necessary npm packages
- (conditional)
  - if your content deviates significantly from the other types, you may have to adjust lower level settings too, such as in the `gatsby-config.js`

### Developing with GraphQL

There's a lot Gatsby is doing for you under the hood. Some example queries are already running. To test these out, go to http://localhost:8080/___graphql (replace 8080 with a different port if your dev server is using something else) and run your queries there. For instance, the page query for one page in the app is:

```
    allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    filter: { frontmatter: { templateKey: { eq: "play" } } }
  ) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
```

All you have to do is add `query { }` around that like so:


```
query {
    allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    filter: { frontmatter: { templateKey: { eq: "play" } } }
  ) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
```

You can explore your available data after updating the data/content portions of your full slice. This would include the yml and markdown files, at minimum. (Still need to test if anything else is required).

The GraphiQL browser is _super_ helpful with seeing available fields for a query.

### Working with images

To rehash the above discussion of GraphQL, but specifically with the gatsby image plugin (even though GraphiQL makes it kinda self-documenting), see here: https://www.gatsbyjs.org/docs/working-with-images/

### Adding content

I'll flesh this out more in the future. For starters, I want to leave myself a link to the Netlify CMS widgets: https://www.netlifycms.org/docs/widgets/
