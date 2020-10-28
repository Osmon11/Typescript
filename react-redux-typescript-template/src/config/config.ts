import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

let Config = {
  apiKey: "AIzaSyBoCaAwwr3NpnV2BLRmEQqjggf4050E98w",
  authDomain: "feildofdreams-a7ade.firebaseapp.com",
  databaseURL: "https://feildofdreams-a7ade.firebaseio.com",
  projectId: "feildofdreams-a7ade",
  storageBucket: "feildofdreams-a7ade.appspot.com",
  messagingSenderId: "185723527093",
  appId: "1:185723527093:web:4f5151e621c1d28a75c3fc",
  measurementId: "G-DT62CB6ERN",
};

firebase.initializeApp(Config);

export const storage = firebase.storage();
export const firestore = firebase.firestore();
export default firebase;
