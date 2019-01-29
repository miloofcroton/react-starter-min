

export const allItems = () => JSON.stringify({
  query:
    `query {
      items {
        _id
        title
        description
      }
    }`
});


export const oneItem = id => JSON.stringify({
  query:
    `query {
      item(id: "${id}")
      {
        _id
        title
        description
      }
    }`
});

export const createItem = item => JSON.stringify({
  query:
    `mutation {
      createItem(
        title: "${item.title}"
        description: "${item.description}"
      )
      {
        _id
        title
        description
      }
    }`
});

export const deleteItem = id => JSON.stringify({
  query:
    `mutation {
      deleteItem(id: "${id}") {
        _id
        title
      }
    }`
});
