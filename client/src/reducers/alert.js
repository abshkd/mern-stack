import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

// an array of alert objects
const initialState = [];

//state is immutable
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload]; // immutable state spread
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id != payload);

    default:
      return state;
  }
}
