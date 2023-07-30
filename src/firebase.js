// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaclI_CCjqEUQYz81RKvYdxz6r4Rn5KRs",
  authDomain: "newsapp-88726.firebaseapp.com",
  projectId: "newsapp-88726",
  storageBucket: "newsapp-88726.appspot.com",
  messagingSenderId: "971206793145",
  appId: "1:971206793145:web:72000b323aa58697de0868"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseauth = getAuth(app)
export default firebaseauth