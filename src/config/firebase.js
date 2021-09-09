import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyBTH8RlnJ7ycZJW_Z_6ofrj-Q57VlLa0Pw',
  authDomain: 'gdscsrec.firebaseapp.com',
  projectId: 'gdscsrec',
  storageBucket: 'gdscsrec.appspot.com',
  messagingSenderId: '130106895846',
  appId: '1:130106895846:web:d5ff7e1b6436ae9f91ba27',
  measurementId: 'G-W74WVYFSF6',
  databaseURL: 'https://gdscsrec-default-rtdb.firebaseio.com',
};

firebase.initializeApp(firebaseConfig);
firebase
  .firestore()
  .enablePersistence({ synchronizeTabs: !0 })
  .catch(() => {
    console.warn('DB offline support not available');
  });
export default {
  notificationSupported: firebase.messaging.isSupported(),
  messaging: firebase.messaging.isSupported() ? firebase.messaging() : null,
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  storage: firebase.storage(),
};
