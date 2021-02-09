import firebase from 'firebase';
import { database } from 'firebase-admin';
let firebaseConfig = {
  apiKey: 'AIzaSyAtFPwPxGhyKFZt03DycmrVxK2FpfiJvYM',
  authDomain: 'user-registration-6b9cd.firebaseapp.com',
  projectId: 'user-registration-6b9cd',
  storageBucket: 'user-registration-6b9cd.appspot.com',
  messagingSenderId: '421055995628',
  appId: '1:421055995628:web:c8b5dbaa07c59536bc0fc9',
};

firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// export const storage = firebase.database();
export const func = firebase.functions();

if (window.location.hostname.includes('localhost')) {
  // auth.useEmulator('http://localhost:9099');
  // firestore.useEmulator('localhost', 8080);
  // storage.useEmulator('localhost', 9000);
  func.useEmulator('localhost', 5001);
}

export default firebase;
