// import { initializeApp } from "firebase/app";
import { initializeApp } from "@firebase/app";
import firebaseConfig from "../../../config/firebase-credentials";
const firebase = initializeApp(firebaseConfig);
export default firebase;