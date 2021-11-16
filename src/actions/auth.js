import { firebase, googleAuthProvider } from "../firebase/firebase";
import { setExpensesAsync } from "./expenses";

export const signInGoogleAsync = () => {
  return async (dispatch) => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(async () => {
        return firebase
          .auth()
          .signInWithPopup(googleAuthProvider)
          .then((result) => {
            dispatch(signIn(result.user.providerData[0]));
            dispatch(setExpensesAsync());
          })
          .catch((e) => {
            console.warn(e);
          });
      })
      .catch((e) => console.warn(e));
  };
};

export const signInPasswordAsync = (email, password) => {
  return async (dispatch) => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(async () => {
        return firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
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
      })
      .catch((e) => console.warn(e));
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

export const signUpAsync = (email, password) => {
  return async (dispatch) => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          const email = result.user.email;
          dispatch(
            signIn({
              email: email,
              uid: result.user.uid,
              displayName: email.substring(0, email.indexOf("@")),
            })
          );
        });
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

export const userLoading = () => {
  return {
    type: "USER_LOADING",
  };
};

export const noUserFound = () => {
  return {
    type: "NO_USER_FOUND",
  };
};
