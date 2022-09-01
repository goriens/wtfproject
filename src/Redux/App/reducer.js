import * as Types from "./actionTypes";
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_GYM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.GET_GYM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case Types.GET_GYM_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
