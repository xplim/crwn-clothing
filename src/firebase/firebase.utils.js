import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBvbowqV0uTwSm-VfDT_hdOQYZ09BkZER0',
  authDomain: 'crwn-db-b6fc3.firebaseapp.com',
  projectId: 'crwn-db-b6fc3',
  storageBucket: 'crwn-db-b6fc3.appspot.com',
  messagingSenderId: '844421576440',
  appId: '1:844421576440:web:7fb86a64ba0ba834386d0d',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
