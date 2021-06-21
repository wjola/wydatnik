import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBM7_Gdrdjv06UWsjlci8FNr90GFq3yzNE",
    authDomain: "wydatnik-c8e7c.firebaseapp.com",
    projectId: "wydatnik-c8e7c",
    storageBucket: "wydatnik-c8e7c.appspot.com",
    messagingSenderId: "794359616152",
    appId: "1:794359616152:web:72376234b626f00441b6ed"
};

const firebaseApp = firebase.initializeApp(config, 'wydatnik');

export default firebase.database(firebaseApp);