import { FETCH_ORDER, FETCH_FAILURE } from '../actions/inventory.js';

const INITIAL_STATE = { order: null, errors: {} };

const inventory = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ORDER:
      return {
        order: action.order,
      };
    case FETCH_FAILURE:
      return {
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default inventory;
