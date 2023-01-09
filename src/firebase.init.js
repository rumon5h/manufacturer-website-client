// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIfmTYqAyos-almwk21G7JVvBwIsjWcks",
  authDomain: "assignment-12-d283f.firebaseapp.com",
  projectId: "assignment-12-d283f",
  storageBucket: "assignment-12-d283f.appspot.com",
  messagingSenderId: "922545296481",
  appId: "1:922545296481:web:2b7d860f053e3ee2e0c620"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;