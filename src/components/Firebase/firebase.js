import firebase from 'firebase';
let firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAtFPwPxGhyKFZt03DycmrVxK2FpfiJvYM',
  authDomain: 'user-registration-6b9cd.firebaseapp.com',
  projectId: 'user-registration-6b9cd',
  storageBucket: 'user-registration-6b9cd.appspot.com',
  messagingSenderId: '421055995628',
  appId: '1:421055995628:web:c8b5dbaa07c59536bc0fc9',
});

const db = firebaseConfig.firestore();

export { db, firebaseConfig };
