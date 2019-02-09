import { RELOAD, FETCH_ORDER, FETCH_FAILURE } from '../actions/inventory.js';

const INITIAL_STATE = { loading: true, order: null, errors: [] };

const inventory = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RELOAD:
      return {
        loading: true,
        order: null,
        errors: [],
      };
    case FETCH_ORDER:
      return {
        loading: false,
        order: action.order,
        errors: [],
      };
    case FETCH_FAILURE:
      return {
        loading: true,
        order: state.order,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default inventory;
