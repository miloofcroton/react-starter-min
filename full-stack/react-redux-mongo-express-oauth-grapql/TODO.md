# TODO

I want to sort this out a little more...

## Immediate

- OAuth
  - front end
    - check for a login cookie instead of always having to login on reload
  - back end
    - do more?

## Goals

### Near-term

- higher order components:
  - forms
  - listing (actually use what is already there?)
- redux:
  - hold errors in store along with loading state
  - show normalized pattern with references
  - show pure functions in effects.js that act on payload and return in action creator
    - calculation before state is stored or another action is dispatched
- observables
  - actually use them to create live updates (without reloading page) from mongodb

### Planned

- language tools
  - immutable.js?
  - typescript?
- front end tools
  - redux first router?
  - CMS setup
  - material ui?
- databases
  - postgres as an option
  - neo4j as an option
- APIs
  - apollo (server and/or client)?
  - prisma?
- Ops
  - containerized ops setup
- documentation
  - add notes for proper deployment and CI
- performance
  - improve lighthouse scores
