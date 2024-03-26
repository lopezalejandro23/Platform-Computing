
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore';


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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);