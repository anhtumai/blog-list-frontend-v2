const userReducer = (state: IUser[] = [], action: Action) => {
  switch (action.type) {
    case "INIT_USERS":
      return action.data;
    default:
      return state;
  }
};

export default userReducer;
