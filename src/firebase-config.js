import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAi8OxV2U5YpBTjqG2nOVqeUzfM0KPgWh8",
  authDomain: "instasite-1392d.firebaseapp.com",
  projectId: "instasite-1392d",
  storageBucket: "instasite-1392d.appspot.com",
  messagingSenderId: "274732564721",
  appId: "1:274732564721:web:5cacb802de24bd6cb56950",
  measurementId: "G-K0RC3B42XE"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const db = getFirestore(app);


export default getFirestore()

