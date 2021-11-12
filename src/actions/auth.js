import { firebase, googleAuthProvider } from "../firebase/firebase";

export const signInAsync = () => {
  return async () => {
    try {
      await firebase.auth().signInWithRedirect(googleAuthProvider);
    } catch (e) {
      console.warn(e);
    }
  };
};

export const signOutAsync = () => {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch(signOut());
    } catch (e) {
      console.warn(e);
    }
  };
};

export const signIn = (data) => {
  return {
    type: "LOGIN",
    data,
  };
};

const signOut = () => {
  return {
    type: "LOGOUT",
  };
};
