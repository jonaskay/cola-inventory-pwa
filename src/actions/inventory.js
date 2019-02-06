export const FETCH_ORDER = 'FETCH_ORDER';

export const loadOrder = () => async dispatch => {
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
