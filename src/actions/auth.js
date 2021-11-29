import { auth, googleAuthProvider } from "../firebase/firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "@firebase/auth";
import { setExpensesAsync } from "./expenses";

export const signInGoogleAsync = () => {
  return async (dispatch) => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        dispatch(signIn(result.user.providerData[0]));
        dispatch(setExpensesAsync());
      })
      .catch((e) => {
        console.warn(e);
      });
  };
};

export const signInPasswordAsync = (email, password) => {
  return async (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const email = result.user.email;

        dispatch(
          signIn({
            email: email,
            uid: result.user.uid,
            displayName: email.substring(0, email.indexOf("@")),
          })
        );
        dispatch(setExpensesAsync());
      })
      .catch((e) => {
        console.warn(e);
      });
  };
};

export const signOutAsync = () => {
  return async (dispatch) => {
    try {
      await auth.signOut();
      dispatch(signOut());
    } catch (e) {
      console.warn(e);
    }
  };
};

export const signUpAsync = (email, password) => {
  return async (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const email = result.user.email;

      dispatch(
        signIn({
          email: email,
          uid: result.user.uid,
          displayName: email.substring(0, email.indexOf("@")),
        })
      );
      dispatch(setExpensesAsync());
    });
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
