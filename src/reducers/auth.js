const initialUserState = {
  isLoading: true,
  uid: "",
  photoURL: "",
  email: "",
  displayName: "",
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.data, isLoading: false };
    case "LOGOUT":
      return { ...initialUserState, isLoading: false };
    case "USER_LOADING":
      return { ...state, isLoading: true };
    case "NO_USER_FOUND":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
