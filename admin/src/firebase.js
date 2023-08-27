import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDbCngTFIFcrQ2PqnoA9v_RerZhK96fyOc",
    authDomain: "shop-9463c.firebaseapp.com",
    projectId: "shop-9463c",
    storageBucket: "shop-9463c.appspot.com",
    messagingSenderId: "381256083103",
    appId: "1:381256083103:web:ee118d3577f625db9324aa"
};

const app = initializeApp(firebaseConfig);

export default app;