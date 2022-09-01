import axios from "axios";
import * as Types from "./actionTypes";

export const getGym = (q) => (dispatch) => {
  dispatch({ type: Types.GET_GYM_REQUEST });
  return axios
    .get(`http://localhost:8080/data`)
    .then((r) => dispatch({ type: Types.GET_GYM_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: Types.GET_GYM_FAILURE, payload: e }));
};
