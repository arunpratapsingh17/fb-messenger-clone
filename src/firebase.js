import * as firebase from "firebase";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyD9zuM_fyuftacBZ9DxrnJFoBDyVrQsW9k",
//   authDomain: "fb-messenger-apsj.firebaseapp.com",
//   databaseURL: "https://fb-messenger-apsj.firebaseio.com",
//   projectId: "fb-messenger-apsj",
//   storageBucket: "fb-messenger-apsj.appspot.com",
//   messagingSenderId: "436604476631",
//   appId: "1:436604476631:web:200fb7b6758c17a6652492",
//   measurementId: "G-7RE4HSBDJ7",
// });
// const db = firebaseApp.firestore();

firebase.initializeApp({
  apiKey: "AIzaSyD9zuM_fyuftacBZ9DxrnJFoBDyVrQsW9k",
  authDomain: "fb-messenger-apsj.firebaseapp.com",
  databaseURL: "https://fb-messenger-apsj.firebaseio.com/",
  projectId: "fb-messenger-apsj",
  storageBucket: "fb-messenger-apsj.appspot.com",
  messagingSenderId: "436604476631",
  appId: "1:436604476631:web:200fb7b6758c17a6652492",
  measurementId: "G-7RE4HSBDJ7",
});
const db = firebase.firestore();

export default db;
