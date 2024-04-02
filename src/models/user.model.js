//this creates the structure for the info for posting
// const { v4: uuidv4 } = require("uuid");

import firebase from "firebase/app/dist/index.cjs.js";
import "firebase/firestore/dist/index.node.cjs.js";
import "firebase/storage/dist/index.cjs.js";
// import { getStorage } from "firebase/storage";
// const firebase = require("firebase/app");
// const firestore = require("firebase/firestore");
// let storage = require("firebase/storage");
const firebaseConfig = {
  apiKey: "AIzaSyCcH1VVfAM9LyJAY33ouhWbREyTUXvD5LA",
  authDomain: "new-legacy.firebaseapp.com",
  databaseURL: "https://new-legacy-default-rtdb.firebaseio.com",
  projectId: "new-legacy",
  storageBucket: "new-legacy.appspot.com",
  messagingSenderId: "1038277913135",
  appId: "1:1038277913135:web:cd6f60bc0991a80292f4da",
  measurementId: "G-83XGLZB2VN",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBQZ0u6ir9N1bqcKKHe5WZvWM3hUHBDL2o",
//   authDomain: "online-app-ee05b.firebaseapp.com",
//   projectId: "online-app-ee05b",
//   storageBucket: "online-app-ee05b.appspot.com",
//   messagingSenderId: "841226681637",
//   appId: "1:841226681637:web:f27452c516f79bf00baecc",
//   measurementId: "G-8PHZFSCP3M",
// };

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export const storage = firebase.storage().ref();
// export const storage = getStorage(app);

// exports.storage = storage;

const User = db.collection("Users");
export { User, db, firebase };
