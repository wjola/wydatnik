const initialUserState = {
  uid: "",
  photoURL: "",
  email: "",
  displayName: "",
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
