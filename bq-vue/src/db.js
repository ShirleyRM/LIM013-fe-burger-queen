import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrY96sm2ZnaX4e-rL1EdoRPQSQas_-kRs",
    authDomain: "bq-lim013.firebaseapp.com",
    databaseURL: "https://bq-lim013-default-rtdb.firebaseio.com",
    projectId: "bq-lim013",
    storageBucket: "bq-lim013.appspot.com",
    messagingSenderId: "1045138510471",
    appId: "1:1045138510471:web:40155565108034be335e22",
    measurementId: "G-R9WYXV797E"
};

export const db = firebase.initializeApp(firebaseConfig).firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })