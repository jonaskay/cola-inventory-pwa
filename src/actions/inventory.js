export const RELOAD = 'RELOAD';
export const FETCH_ORDER = 'FETCH_ORDER';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const loadOrder = () => async dispatch => {
  dispatch({ type: RELOAD });

  const resp = await fetch(
    'https://europe-west1-cola-inventory.cloudfunctions.net/fetch'
  );
  const data = await resp.json();
  if (resp.status == 200) {
    dispatch({
      type: FETCH_ORDER,
      order: data,
    });
  } else {
    dispatch({
      type: FETCH_FAILURE,
      errors: data,
    });
  }
};

export const sendOrder = () => async dispatch => {
  dispatch({ type: RELOAD });

  const resp = await fetch(
    'https://europe-west1-cola-inventory.cloudfunctions.net/order',
    { method: 'POST' }
  );
  const data = await resp.json();
  if (resp.status == 200) {
    dispatch({ type: FETCH_ORDER, order: data });
  } else {
    dispatch({ type: FETCH_FAILURE, errors: data.errors });
  }
};

export const sendDelivery = () => async dispatch => {
  const resp = await fetch(
    'https://europe-west1-cola-inventory.cloudfunctions.net/deliver'
  );
  const data = await resp.json();
  if (resp.status == 200) {
    dispatch({
      type: FETCH_ORDER,
      order: data,
    });
  } else {
    dispatch({
      type: FETCH_FAILURE,
      errors: data,
    });
  }
};
