import * as types from './types';

const actions = {

  getOne: {
    start: id => ({
      type: types.FETCH_ONE_START,
      payload: id,
    }),
    done: item => ({
      type: types.FETCH_ONE_DONE,
      payload: item,
    })
  },

  getList: {
    start: () => ({
      type: types.FETCH_LIST_START
    }),
    done: items => ({
      type: types.FETCH_LIST_DONE,
      payload: items,
    })
  },

  postOne: {
    start: () => ({
      type: types.POST_ONE_START
    }),
    done: item => ({
      type: types.POST_ONE_DONE,
      payload: item,
    })
  }

};

export default actions;
