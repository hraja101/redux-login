import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

import AuthService from '../utils/authservice';

export const register = (username, email, password) => (dispatch) => {
    return AuthService.register(username, email, password).then(
      () => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          console.log(message);
  
        dispatch({
          type: REGISTER_FAIL,
        });
        return Promise.reject();
      }
    );
  };