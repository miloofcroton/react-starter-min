Maximum Intensity Workout Tracker
=========

A cool fitness app.

<!-- **App:** [![Build Status](https://travis-ci.org/Team-Knockout/state-craft.svg?branch=master)](https://travis-ci.org/Team-Knockout/state-craft)
**Server:** [![Build Status](https://travis-ci.org/Team-Knockout/state-craft.svg?branch=master)](https://travis-ci.org/Team-Knockout/state-craft) -->

Table of contents
=================

<!--ts-->
   * [Maximum Intensity Workout Tracker](#Maximum-Intensity-Workout-Tracker)
   * [Table of contents](#table-of-contents)
   * [About](#about)
   * [Usage](#usage)
      * [Installation](#installation)
      * [Gameplay](#gameplay)
   * [TODO](#TODO)
<!--te-->

About
============

We built this app because we wanted a cool app to store all of our workout data.

Usage
=====

Installation
-----

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

### Deployment

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

Gameplay
-----------

The app flows as follows:

Sign up -> Add a workout -> Add exercises to your workout

If you want to delete a workout or exercise, you can.

Click the button on the top of the workout card to begin your workout. As you do your workout, you can use the timer at the bottom and hit the set button for each set you do. If you fall short of the goal reps, you can hit the button again to reduce your recorded reps until it is correct.

The app keeps track of all workout history as well as maximum lifts per user, which we will display analytics for in the user profile.

TODO
==========

#### Server

* record lifetime and recent maxes per lift per user (use this to calculate weights when going from program -> new logs)
* document the API
  * show what a particular method will expect in the body for posts

#### App

* add 'create new program' page
* add table and graph of maxes to user page
* styling
  * use a styling framework to prettify the app, OR
  * improve styling and correct all duplication/waste in the css
* fix the duplication happening with workoutcard and workoutdetail
* decide on perhaps a better organization of content for the workoutcard, workoutdetail, and/or workoutlist

#### Docs

* Deploy a docs site with Gatsby

