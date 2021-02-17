import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDrY96sm2ZnaX4e-rL1EdoRPQSQas_-kRs',
  authDomain: 'bq-lim013.firebaseapp.com',
  projectId: 'bq-lim013',
  storageBucket: 'bq-lim013.appspot.com',
  messagingSenderId: '1045138510471',
  appId: '1:1045138510471:web:40155565108034be335e22',
  measurementId: 'G-R9WYXV797E',
};

// Get a Firestore instance
export const db = firebase.initializeApp(firebaseConfig).firestore();

// export default firebaseApp.firestore();

const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true });
