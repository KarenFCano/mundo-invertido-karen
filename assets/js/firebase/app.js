// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgZJe_-xKkQtAiiTdvEMXG_T8NSZUhwbA",
  authDomain: "mundo-invertido-karen.firebaseapp.com",
  projectId: "mundo-invertido-karen",
  storageBucket: "mundo-invertido-karen.appspot.com",
  messagingSenderId: "287168327914",
  appId: "1:287168327914:web:fee8d9b578c281e8ad6793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;