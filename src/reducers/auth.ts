import storageUtils from "../utils/localStorage";

const initialState = storageUtils.loadUser();

function authReducer(
  state: IUserWithToken | null = initialState,
  action: Action,
) {
  switch (action.type) {
    case "LOGIN":
      return action.data;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
}

export default authReducer;
