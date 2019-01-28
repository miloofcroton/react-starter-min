export default [
  {
    date: new Date(2018, 1, 10),
    title: 'Jekyll Homepage',
    summary: 'Professional homepage built as a SPA using Jekyll and Google Earth images',
    description: 'The most interesting thing about this project was the background image selection. The feature will refresh a new image on load, and it will also provide a way to click directly into Google Earth with that region in focus (so you can keep looking around). In hindsight, it\'s a pretty simple concept, but it was something I was learning when I wrote it.',
    tags: ['Jekyll', 'Ruby', 'Javascript', 'HTML', 'CSS', 'Google Earth'],
    github: 'https://github.com/miloofcroton/miloofcroton.github.io',
    live: 'http://toumey.io/'
  },
  {
    date: new Date(2018, 8, 17),
    title: 'Statecraft',
    summary: 'A fun political sandbox game using Vanilla JS',
    description: 'This was my first group project at Alchemy Code PDX. My team consisted of three other team members. Together, wrote component architecture using Vanilla JS. We mocked a database using a JSON and an API abstraction. Account data was stored in the browser\'s local storage. We practiced good processes, such as git usage and Agile team principles. ',
    tags: ['Javascript', 'HTML', 'CSS'],
    github: 'https://github.com/Team-Knockout/state-craft',
    live: 'https://team-knockout.github.io/state-craft/'
  },
  {
    date: new Date(2018, 9, 14),
    title: 'Maximum Intensity Fitness',
    summary: 'A workout tracker built using Vue',
    description: 'This was my second group project at Alchemy Code PDX. My team consisted of two other team members. Together, wrote component architecture using Vue. We used Postgres for our database and wrote a simple server using Express. This was one our of first full stack apps, particularly the first that we went this in-depth with. We practiced good processes, such as git usage and Agile team principles. ',
    tags: ['Node', 'Javascript', 'Vue', 'HTML', 'CSS', 'PostgresSQL', 'Express'],
    github: 'https://github.com/Big-Cats/app',
    live: 'http://maximumintensity.fitness'
  },
  {
    date: new Date(2018, 10, 28),
    title: 'Cryptokeeper',
    summary: 'A multi-user cryptocurrency exchange in which users trade simulated cryptocurrencies based on real-time market data.',
    description: 'This was my third group project at Alchemy Code PDX. My team consisted of two other team members. Together, wrote a complex back end in Express, which was connected to Mongo via Mongoose. Much of the development time was spend writing aggregations, middleware, and end to end tests. In addition, we had a Vue front end that did a few simple things. We rolled our own auth using bcrypt and storing the hashed passwords in our Mongo instance. We practiced good processes, such as git usage, Agile team principles, and test-driven development. ',
    tags: ['Node', 'Javascript', 'HTML', 'CSS', 'MongoDB', 'Mongoose', 'Express', 'Jest'],
    github: 'https://github.com/DefinitelyNotRobots/cryptokeeper-server',
    live: 'https://peaceful-springs-50309.herokuapp.com/'
  }
];
