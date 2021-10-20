import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyDe_3kZY0C38euBfPeNwJy6Z165tWS_NBA",
    authDomain: "crwn-db-25190.firebaseapp.com",
    projectId: "crwn-db-25190",
    storageBucket: "crwn-db-25190.appspot.com",
    messagingSenderId: "317798835595",
    appId: "1:317798835595:web:8429ea5222e2c00b92bb8e",
    measurementId: "G-JNT8JLRFNW"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;