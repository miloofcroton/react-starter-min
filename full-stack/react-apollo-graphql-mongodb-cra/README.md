# full stack starter

## Deployment Options

1. Use the scripts in the root package.json and use this as a monorepo.
2. Use the client and server in separate repos, deploy separately.

## CRA notes

No need to eject to define env either, do like so

```
"scripts": {
  "start": "REACT_APP_S3ENV=development REACT_APP_BUILDDATE=$(date '+%m-%d-%y, %H:%M') PORT=3001 NODE_PATH=./src react-scripts start",
  "build": "REACT_APP_BUILDDATE=$(date '+%m-%d-%y, %H:%M') NODE_PATH=./src react-scripts build"
}
```

access the variables in your code like `process.env.REACT_APP_BUILDDATE`

`NODE_PATH=./src` helps to get absolute pathing on your imports
