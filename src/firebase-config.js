import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2zYa3dyDBG2PnG7zWop6KkjoZYs0rl9Y",
  authDomain: "estatein-fake.firebaseapp.com",
  projectId: "estatein-fake",
  storageBucket: "estatein-fake.appspot.com",
  messagingSenderId: "536187012252",
  appId: "1:536187012252:web:a79f674d58503911971959",
  measurementId: "G-QR37GNG217",
};




const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {
    app,
    db
}

