// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { collection, getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import 'firebase/compat/firestore';
import "firebase/compat/auth";
import 'firebase/compat/database';
import firebase from 'firebase/compat/app';


const firebaseConfig = {
  apiKey: "AIzaSyDf0HUOJ0rYZd0pYdtZ1AdaQBGxmpa4Qwo",
  authDomain: "mynewchat-cdffe.firebaseapp.com",
  databaseURL: "https://mynewchat-cdffe-default-rtdb.firebaseio.com",
  projectId: "mynewchat-cdffe",
  storageBucket: "mynewchat-cdffe.appspot.com",
  messagingSenderId: "70961052535",
  appId: "1:70961052535:web:fd691bc555af32679ebf72",
  measurementId: "G-89QSXSZSD2"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app);
const db = getFirestore(app);
const realtimeDb = getDatabase(app); // Pass the Firebase app instance to getDatabase()
export const usersRef = ref(realtimeDb, "users");
const realtimedb = getDatabase();


export {
  app,
  auth,
  storage,
  db,
  realtimedb,
  realtimeDb
};











// ====================================

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage  } from "firebase/storage";
// import { getFirestore} from "firebase/firestore";
// import { getDatabase } from "firebase/database";
// import {ref as sRef} from "firebase/storage"



// const firebaseConfig = {
//   apiKey: "AIzaSyDf0HUOJ0rYZd0pYdtZ1AdaQBGxmpa4Qwo",
//   authDomain: "mynewchat-cdffe.firebaseapp.com",
//   databaseURL: "https://mynewchat-cdffe-default-rtdb.firebaseio.com",
//   projectId: "mynewchat-cdffe",
//   storageBucket: "mynewchat-cdffe.appspot.com",
//   messagingSenderId: "70961052535",
//   appId: "1:70961052535:web:fd691bc555af32679ebf72",
//   measurementId: "G-89QSXSZSD2"
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const storage = getStorage(app);
// const db = getFirestore(app);
// const realtimeDb = getDatabase(app);
// const usersRef = sRef(realtimeDb, "users");

// export {
//   app,
//   auth,
//   storage,
//   db,
//   realtimeDb,
//   usersRef
// };



