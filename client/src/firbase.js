// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5ySN0Pjzo3D_VwjMgrK4gW2uk6FXxHtA",
  authDomain: "ems-app-18e78.firebaseapp.com",
  projectId: "ems-app-18e78",
  storageBucket: "ems-app-18e78.appspot.com",
  messagingSenderId: "103903255659",
  appId: "1:103903255659:web:d8c211faf28d5f7507652e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app