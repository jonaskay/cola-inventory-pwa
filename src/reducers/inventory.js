import { FETCH_ORDER } from '../actions/inventory.js';

const INITIAL_STATE = { order: null };

const inventory = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ORDER:
      return {
        order: action.order,
      };
    default:
      return state;
  }
};

export default inventory;
