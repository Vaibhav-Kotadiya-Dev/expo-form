import { combineReducers } from "redux";
import { createStore } from "redux";
import { reducer as UserData } from "./UserData/reducers";

const appReducer = combineReducers({
  UserData,
});

const store = createStore(appReducer);

export { store };
