// Fetch items
export const FETCH_ITEMS_START = 'FETCH_ITEMS_START';
export const FETCH_ITEMS_DONE = 'FETCH_ITEMS_DONE';
export const fetchItemsStart = () => ({
  type: FETCH_ITEMS_START
});
export const fetchItemsDone = items => ({
  type: FETCH_ITEMS_DONE,
  payload: items,
});

// Fetch item
export const FETCH_ITEM_START = 'FETCH_ITEM_START';
export const FETCH_ITEM_DONE = 'FETCH_ITEM_DONE';
export const fetchItemStart = id => ({
  type: FETCH_ITEM_START,
  payload: id,
});
export const fetchItemDone = item => ({
  type: FETCH_ITEM_DONE,
  payload: item,
});

// Post item
export const POST_ITEM_START = 'POST_ITEM_START';
export const POST_ITEM_DONE = 'POST_ITEM_DONE';
export const postItemStart = () => ({
  type: POST_ITEM_START
});
export const postItemDone = item => ({
  type: POST_ITEM_DONE,
  payload: item,
});
