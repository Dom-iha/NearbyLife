// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM5ZE8Ce2rw8qgAo61HZznhUrGlye0wUw",
  authDomain: "nearbylife-a1a84.firebaseapp.com",
  projectId: "nearbylife-a1a84",
  storageBucket: "nearbylife-a1a84.appspot.com",
  messagingSenderId: "341747167084",
  appId: "1:341747167084:web:2e44e191a5a57113890d49",
  measurementId: "G-4D6FQENF94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);