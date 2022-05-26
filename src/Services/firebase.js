import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCythRDtYOY0-UrVGUDlpOADo3JbxLuMIM",
  authDomain: "myapp-5ef07.firebaseapp.com",
  projectId: "myapp-5ef07",
  storageBucket: "myapp-5ef07.appspot.com",
  messagingSenderId: "796649968627",
  appId: "1:796649968627:web:e2ff3d98b126e773443886"
};

const app =  initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db