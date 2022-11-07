// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1EsnRs-QhVi3qWYcqLdngdcMvVlVvol8",
  authDomain: "service-review-assinment.firebaseapp.com",
  projectId: "service-review-assinment",
  storageBucket: "service-review-assinment.appspot.com",
  messagingSenderId: "265621264312",
  appId: "1:265621264312:web:89e5df67da5450f989214d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;