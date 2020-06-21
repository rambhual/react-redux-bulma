import { Actions } from "../constant/user";
const initialState = {
  authenticated: false,
  isFetching: false,
  errorMessage: "",
  userInfo: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.LOAD_USERS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });

    case Actions.LOAD_USERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        authenticated: true,
        userInfo: payload
      });

    case Actions.LOAD_USERS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        authenticated: false,
        errorMessage: payload,
        userInfo: {}
      });
    default:
      return state;
  }
};
