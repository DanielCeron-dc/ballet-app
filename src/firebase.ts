// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxzFkthQwgc63dWGyuwQveCO7gWYUZpck",
  authDomain: "ballet-react-app.firebaseapp.com",
  databaseURL: "https://ballet-react-app.firebaseio.com",
  projectId: "ballet-react-app",
  storageBucket: "ballet-react-app.appspot.com",
  messagingSenderId: "942545853132",
  appId: "1:942545853132:web:12957dbeb4fb021e2c0069",
  measurementId: "G-82C9E1DMVD",
};
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

window.firebase = firebase;
export default firebase;
