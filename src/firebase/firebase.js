import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBM7_Gdrdjv06UWsjlci8FNr90GFq3yzNE",
  authDomain: "wydatnik-c8e7c.firebaseapp.com",
  databaseURL: "https://wydatnik-c8e7c-default-rtdb.firebaseio.com",
  projectId: "wydatnik-c8e7c",
  storageBucket: "wydatnik-c8e7c.appspot.com",
  messagingSenderId: "794359616152",
  appId: "1:794359616152:web:72376234b626f00441b6ed",
};

const firebaseApp = firebase.initializeApp(config);
const database = firebase.database(firebaseApp);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, database, googleAuthProvider };
