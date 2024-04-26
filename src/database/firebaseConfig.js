
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCDf_IiF8CgeeNFBeamR27E4GRa3xglfh8",
  authDomain: "aularonan-c3128.firebaseapp.com",
  projectId: "aularonan-c3128",
  storageBucket: "aularonan-c3128.appspot.com",
  messagingSenderId: "849182509828",
  appId: "1:849182509828:web:24781f0769de2150805e51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);