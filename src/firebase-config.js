import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBeuYrli59uQTKinBzfSkgXvksmJ9uqgvs",
    authDomain: "fir-tutorial-81fa5.firebaseapp.com",
    projectId: "fir-tutorial-81fa5",
    storageBucket: "fir-tutorial-81fa5.appspot.com",
    messagingSenderId: "503726364914",
    appId: "1:503726364914:web:03639c88e0c1850f44986b",
    measurementId: "G-HS8QVS7ECK"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore();





