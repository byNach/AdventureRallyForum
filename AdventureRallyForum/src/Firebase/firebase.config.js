import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpQMa4SZUGsfAbq_Bx-DKZTESEhPVTmAM",
  authDomain: "adventurerallyforum-e0907.firebaseapp.com",
  projectId: "adventurerallyforum-e0907",
  storageBucket: "adventurerallyforum-e0907.appspot.com",
  messagingSenderId: "140813148844",
  appId: "1:140813148844:web:cfc4ab5150f3cb153f3509"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)