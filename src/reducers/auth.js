const initialUserState = {
  email: "",
  uid: "",
  displayName: "",
  photoURL: "",
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.data };
    case "LOGOUT":
      return { ...initialUserState };
    default:
      return state;
  }
};

export default userReducer;
