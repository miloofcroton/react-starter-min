

export const allThings = () => JSON.stringify({
  query:
    `query {
      things {
        _id
        title
        description
      }
    }`
});

export const oneThing = id => JSON.stringify({
  query:
    `query {
      thing(id: "${id}")
      {
        _id
        title
        description
      }
    }`
});

export const createThing = thing => JSON.stringify({
  query:
    `mutation {
      createThing(
        title: "${thing.title}"
        description: "${thing.description}"
      )
      {
        _id
        title
        description
      }
    }`
});

export const deleteThing = id => JSON.stringify({
  query:
    `mutation {
      deleteThing(id: "${id}") {
        _id
        title
      }
    }`
});
