import firebase from 'firebase';
import 'firebase/firesotre';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSUDgcK1MtjiYtEnFlRvT9HhBOJOJ8iRI",
    authDomain: "a3-metrictracker.firebaseapp.com",
    databaseURL: "https://a3-metrictracker-default-rtdb.firebaseio.com",
    projectId: "a3-metrictracker",
    storageBucket: "a3-metrictracker.appspot.com",
    messagingSenderId: "597796991345",
    appId: "1:597796991345:web:6e6497d6452a30716346d0",
    measurementId: "G-RSR5N92TYT"
  };

  export const firebaseApp = firebaseapp.initializeApp(firebaseConfig);

  export const firebaseDb = firebase.firestore();