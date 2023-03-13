// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsJa4z71lnfErKEO1heFreVAgci204Yi0",
  authDomain: "yomusic-154c5.firebaseapp.com",
  projectId: "yomusic-154c5",
  storageBucket: "yomusic-154c5.appspot.com",
  messagingSenderId: "447973697525",
  appId: "1:447973697525:web:6032dd9641ff0fd13462bc",
  measurementId: "G-HY09NDLG2M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
