MERN Starter
=================

[![Staging Build Status](https://travis-ci.org/miloofcroton/react-starters.svg?branch=staging)](https://travis-ci.org/miloofcroton/react-starters)

About
=================

Starter for the MERN stack

Table of contents
=================

<!--ts-->
  - [About](#About)
  - [Table of contents](#table-of-contents)
  - [Theory](#Theory)
    - [Tech](#Tech)
  - [Operations](#Operations)
    - [Project setup](#Project-setup)
    - [Deployment](#Deployment)
  - [Development](#Development-Process)
    - [Full slices](#Full-slices)
    - [Notes](#Notes)
    - [VS Code folder icons](#VS-Code-folder-icons)
  - [Issues](#Issues)
<!--te-->

## Theory

### Tech

I want to outline some of the main tech choices, with my reasons for choosing them, links to documentation, and any additional notes.

- Server:
  - Node
  - Express
- Data
  - DB: MongoDB
  - ORM: Mongoose
  - API design: REST
- Views
  - Components: React
  - CSS in JS: styled-components
- State:
  - Store: Redux
  - Async middleware: Redux-Observables
  - Observables library: RxJS
  - Memoization library: Reselect
  - Form state: Redux-forms
    - Note about performance optimization: "It has not been a problem in any of our applications. We don't use the redux dev tools, but we do use logging middleware in development and performance is not a problem. Where you might run into problems is if you have a large enough application and you are wasting render cycles. If you change the value of 1 input field and all of the components on your page have to go through a render cycle just to determine they don't need to update, you will potentially see a performance issue. However, this is not a result of dispatching lots of actions, it's a problem with your application architecture. Use Immutable.js (or an immutable pattern) and PureRenderMixin and you'll be fine."
    - submit events:
      - not sure if it is better to compose the data in a component or in the action creator
        - if in the action creator, importing the store is ugly. adopt this pattern when you have a chance (using redux-thunk):
          ```
          export const SOME_ACTION = 'SOME_ACTION';
          export function someAction() {
            return (dispatch, getState) => {
              const { items } = getState().otherReducer;

              dispatch(anotherAction(items));
            }
          }
          ```
        - if it is the component, why are you pulling data from the store that you never present? seems like a waste.
    - better approach to submit events, using
- Testing:
  - Jest
  - Enzyme
  - Chance
- Build Tools
  - Webpack (ie not Create React App)
  - Babel
- Dev Tools
  - Linting: ESLint
  - editorconfig
- Typing
  - prop-types
- HTTP Requests: Axios
- Deployment:
  - Heroku
- CI/CD:
  - Travis CI


I will fill this out more later.


## Operations

### Project setup

* Run `npm install` in `/server` and `/client` to install packages.
* Run `npm run start:watch` in `/server` and `/client` to get going with hot reloading.
* Run `npm run test:watch` in both of these places to get tests running (in watch mode too)

### Deployment

More details coming soon. The following is a prior process with Heroku:

1. Assumptions: you have heroku account, have downloaded nodejs tools, and have ran `heroku login` if you need to (should only be once)
2. Deploy:
    1. delete public folder in server
    2. `git pull heroku master` in server
    3. commit and push your changes in app
    4. `npm run build:server` in app
    5. commit and push your changes in server
    6. `git push heroku master`
    7. if you want to run DB seed operations on the heroku site, change `.env` configs temporarily to the heroku DB settings in the server locally, and then run `npm run db-load-all` or whichever db script that you want to run
    8. `heroku open`
    9. Profit!

## Development

##### Full slices

* back end:
  * a folder in /server/resources with `model` and `routes` files
  * edit /server/resources/index.js to include `<resources name>`
  * `OPTIONAL:` a file in /server/testing/fixtures with useful data/functions for writing tests
  * `OPTIONAL:` a file in /server/testing/scripts with useful data/functions for initial DB data
  * `OPTIONAL:` a file in /server/testing/scripts with useful data/functions for initial DB data
  * `OPTIONAL:` if your data requires an external source, other than the database, write the libraries and integrations in /server/lib and /server/services
* front end:
  * a file at /client/src/data/services/`<resource name>`
  * a folder in /client/src/data/store/resources with `actions`, `reducers`, and `selectors` files
  * a folder at /client/src/views/content/`<resource name>` with any necessary view components inside
  * update `ROUTES` in /client/views/routes.js with any new routes
    * note: nav, order, and true are optional and add a link to the default header
  * `OPTIONAL:` a file in /client/src/testing/fixtures with useful data/functions for writing tests

##### Notes

* any tests are placed in __tests__ for the folder of the file that you are testing (this keeps directories clean)
* react-router constants lie within `App.js`
* functional container components lie in `/client/src/views/lib`
* reusable dummy components lie in `/client/src/views/styles` (this are mostly mini UI components)
* components that form the base of your content lie in `/client/src/views/styles` (some are static, some have state or are connected to the store)
* using styled-components for CSS in JS
  * add `vscode-styled-components` in VS Code to get syntax highlighting
  * https://alligator.io/react/styled-components/
  * https://www.styled-components.com/docs/basics#getting-started
* using react-helmet to manage page-level stuff (in the head element) within App.js instead of importing at index.html
  * https://github.com/nfl/react-helmet
* when semantically useful, using the ES6 feature of implicitly importing index.js from any folder that is itself imported. In other words, `import App from 'components/App'` is equivalent to `import App from 'components/App/index.js'`
  * https://alligator.io/react/index-js-public-interfaces/

##### VS Code folder icons

Optionally, you can install `Material Icon Theme` and add the following to your VS Code settings to get colorful icons for just about everything:

```
    "material-icon-theme.folders.theme": "specific",
    "material-icon-theme.activeIconPack": "react_redux",
    "material-icon-theme.files.associations": {
        "selectors.js": "Redux-store",
        "model.js": "Database"
    },
    "material-icon-theme.folders.associations": {
        "selectors": "Redux-store",
        "state": "Resource",
        "fixtures": "Helper",
        "presentational": "Views"
    },
```

## Issues

* add notes for proper deployment and CI

## Goals

- improve oauth integration
  - check for a login cookie instead of always having to login on reload
  - make logout work
  - improve auth components on front end
  - clean up code
- add the following:
  - redux improvements:
    - redux-thunk?
    - better action patterns in redux?
    - data wrangling patterns in redux
  - immutable.js?
  - typescript?
  - redux first router?
  - CMS setup
  - material ui?
  - postgres as an option?
  - graphql via apollo (server and/or client)?
  - containerized ops setup
- improve lighthouse scores
