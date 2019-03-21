import { REQUEST_ACTIVITIES, RECEIVE_ACTIVITIES, SELECT_TYPE } from '../actions/activitiesAction';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_ACTIVITIES:
      return { ...state, loading: true };
    case RECEIVE_ACTIVITIES:
      return { ...state, json: action.json, loading: false };
    case SELECT_TYPE:
      return { ...state, type: action.type_key, loading: false };
    default:
      return state;
  }
};
export default reducer;