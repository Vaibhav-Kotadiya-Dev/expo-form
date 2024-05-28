import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  addUserData: ["payload"],
});

export const addUserDataTypes = Types;
export const addUserDataActions = Creators;
