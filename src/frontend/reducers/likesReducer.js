import { SET_LIKES } from "../constants/queer-constants";

export const likesReducer = (state, action) => {
  switch (action.type) {
    case SET_LIKES:
      return action.payload;
    default:
      return state;
  }
};
