import pjson from "~/package.json";
import dateformat from "dateformat";

// mutations
export const SET_ITEMS = "SET_ITEMS";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "ADD_ITEM";
export const REPLACE_LAST_ITEM = "REPLACE_LAST_ITEM";

const testItems = [
  {
    id: 1,
    text: "item 1",
    description: "desc"
  },
  {
    id: 2,
    text: "item 1",
    description: "desc"
  }
];

export const state = () => ({
  // data
  items: [],

  // constants
  name: pjson.name,
  version: pjson.version,
  description: pjson.description,
  homepage: pjson.homepage,

  // app state
  lastItem: {},
  increment: 0
});

export const mutations = {
  [SET_ITEMS] (state, items) {
    state.items = items;
  },

  [ADD_ITEM] (state, newItem) {
    console.log('add');
    newItem.id = state.increment++;
    state.items.push(newItem);
    console.log(state.items);
    state.lastItem = newItem;
  },

  [REMOVE_ITEM] (state, newItem) {
    const i = state.items.indexOf(newItem)
    state.items.splice(i, 1)
  },
};
/*
export const actions = {
  [REPLACE_LAST_ITEM] ({ commit, state }, newItem) {
    console.log('REPLACE_LAST_ITEM mutation', newItem);
    commit(REMOVE_ITEM, state.lastItem);
    commit(ADD_ITEM, state.newItem);
  }
}
 */

export const strict = process.env.NODE_ENV !== 'production';
