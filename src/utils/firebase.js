// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAse8Ez6rMSAaHzMxWJzYij0Pqo9jQLFuk",
  authDomain: "netflixgpt-20231.firebaseapp.com",
  projectId: "netflixgpt-20231",
  storageBucket: "netflixgpt-20231.appspot.com",
  messagingSenderId: "739055086907",
  appId: "1:739055086907:web:3c54a1ef6b242e54fa1b1e",
  measurementId: "G-BV5131N7S1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();