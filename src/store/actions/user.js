import axios from "axios";
import { Actions } from "../constant/user";
export const loadUserRequest = () => ({
  type: Actions.LOAD_USERS_REQUEST
});
export const loadUserSuccess = payload => ({
  type: Actions.LOAD_USERS_SUCCESS,
  payload
});
export const loadUserFailure = err => ({
  type: Actions.LOAD_USERS_FAILURE,
  payload: err
});

// Fetch users from server
export const fetchUser = () => async dispatch => {
  try {
    dispatch(loadUserRequest());
    const { data } = await axios.get("");
    dispatch(loadUserSuccess(data));
  } catch (error) {
    dispatch(loadUserFailure(error.message));
  }
};

// Set user when login or signup

export const addUser = user => async dispatch => {
  try {
    dispatch(loadUserRequest());
    const { data } = await axios.post("", user);
    dispatch(loadUserSuccess(data));
  } catch (error) {
    dispatch(loadUserFailure(error.message));
  }
};
