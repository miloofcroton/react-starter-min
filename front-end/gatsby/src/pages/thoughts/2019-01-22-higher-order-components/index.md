---
templateKey: thoughts
title: Higher Order Components
date: 2019-01-22T15:04:10.000Z
description: To higher order, or not to higher order
tags:
  - javascript
  - react
  - redux
  - functional programming
---

![hamlet's function](hamlets-function.jpg)

I just ran into a situation of interest. I was calling essentially this: `connect(LoadingComponent(NormalComponent))` where `connect` is from react-redux.

LoadingComponent checks for `props.loading`, which is passed down from connect. If it is true, it returns a loading message. If it is false, it returns the passed in component (which is NormalComponent in this case). When NormalComponent loads (method: `componentDidMount`), it triggers an action that loads data from an API, changing the state in the store so loading = true. This causes the entire thing to rerender.

The only solution is to pull the action into the loader. However, now we aren't dealing with a generic loading component anymore, are we? We're writing a higher order component that specifically deals with a loading state that is modified by a componentDidMount method.

Say we were to go down this path, we have a couple options:

1. Write multiple higher order components for loaders, so I can have a special one for this case and a general one where this issue wouldn't occur.
2. Write a longer higher order component with more conditionals, so it can handle a potential fetch as well as nothing.

The former seems to be too repetitive.

The latter seems to put my components into too rigid of a paradigm. I would then have to write my presentational components to receive a generic data prop and my container components, where I use `connect`, to pass in generic data and fetch props. It very well may be that, as I expand this application, I will find many cases where this paradigm fits, so it won't be too rigid after all.

This brings me to my gripe with higher order components. Unlike scripts or algorithms, where the purpose of a higher order function is clear, applications are large and with ever-changing requirements. It is very easy to say that you should just 'plan better', but the reality is that you'll always make mistakes. Higher order components work well when you have a very clear plan for what your application is doing, and there's something that really won't be changing. If there is the potential for change, the higher order component introduces an extra layer of difficulty when it comes time to refactor.

I'm not totally against them though. Pure functions as easy as it gets for refactoring, and the structure provided by higher order components might be a welcome change on a team where people have different ideas for solving a given problem.
