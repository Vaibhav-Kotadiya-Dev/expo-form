import { INITIAL_STATE } from "./initialState";
import { createReducer } from "reduxsauce";
import { addUserDataTypes } from "./actions";

export const addUserData = (state: any, payload: any) => {
  let stateData: any = !state.userData ? {} : state.userData;
  if (!state.userData) {
    stateData[payload?.payload?.keyValue] = payload?.payload?.value;
  } else {
    stateData[payload?.payload?.keyValue] = payload?.payload?.value;
  }
  return {
    ...state,
    userData: stateData,
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [addUserDataTypes.ADD_USER_DATA]: addUserData,
});
