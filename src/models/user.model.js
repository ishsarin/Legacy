//this creates the structure for the info for posting
// const { v4: uuidv4 } = require("uuid");

// import firebase from "firebase/app/dist/index.cjs.js";
// import "firebase/firestore/dist/index.node.cjs.js";
// import "firebase/storage/dist/index.cjs.js";
import firebase from "firebase/compat/app";
import "firebase/storage";
// import "firebase/compat/firestore";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

import { getAuth } from "firebase/auth";

// import { getAuth } from "firebase/auth/dist/index.cjs.js";
// const { createUserWithEmailAndPassword } = require("firebase/auth");
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcH1VVfAM9LyJAY33ouhWbREyTUXvD5LA",
//   authDomain: "new-legacy.firebaseapp.com",
//   databaseURL: "https://new-legacy-default-rtdb.firebaseio.com",
//   projectId: "new-legacy",
//   storageBucket: "new-legacy.appspot.com",
//   messagingSenderId: "1038277913135",
//   appId: "1:1038277913135:web:cd6f60bc0991a80292f4da",
//   measurementId: "G-83XGLZB2VN",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBQZ0u6ir9N1bqcKKHe5WZvWM3hUHBDL2o",
  authDomain: "online-app-ee05b.firebaseapp.com",
  projectId: "online-app-ee05b",
  storageBucket: "online-app-ee05b.appspot.com",
  messagingSenderId: "841226681637",
  appId: "1:841226681637:web:f27452c516f79bf00baecc",
  measurementId: "G-8PHZFSCP3M",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDkqyrRKx8_3zrPeu9UuOMMNDG_qpzfYGA",
//   authDomain: "newproject1-e616b.firebaseapp.com",
//   projectId: "newproject1-e616b",
//   storageBucket: "newproject1-e616b.appspot.com",
//   messagingSenderId: "396855029190",
//   appId: "1:396855029190:web:a0e20053cfd6a5948956c7",
//   measurementId: "G-0VN07MK3MS",
// };

const app = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
const db = getFirestore(app);
const auth = getAuth(app);
// const auth = firebase.getAuth(app);

// const storage = firebase.storage().ref();

const storageref = ref(db);

const storage = getStorage(app);
const User = collection(db, "Users");
export { User, db, firebase, storage, auth };
