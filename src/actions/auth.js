import { firebase, googleAuthProvider } from '../firebase/firebase';

export const signInAsync = () => {
    return () => {
        return firebase.auth().signInWithRedirect(googleAuthProvider);
    }
}

export const signOutAsync = () => {
    return () => {
        return firebase.auth().signOut();
    }
}