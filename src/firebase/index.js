import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCK9uV3xxDsoegI5KoG_tHgnWGJaDwxTmE",
    authDomain: "xtra-blogs.firebaseapp.com",
    projectId: "xtra-blogs",
    storageBucket: "xtra-blogs.appspot.com",
    messagingSenderId: "934901267310",
    appId: "1:934901267310:web:1be656c10d21d9794d5f7f",
    measurementId: "G-RBXYGDYZ8W"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };