// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD93Ou1tg3gZucZz7pY_1yn0N6-KSFbs1c",
    authDomain: "jrmath-d2fe2.firebaseapp.com",
    projectId: "jrmath-d2fe2",
    storageBucket: "jrmath-d2fe2.appspot.com",
    messagingSenderId: "924536300440",
    appId: "1:924536300440:web:7669169e045ca3f07e01ed",
    measurementId: "G-PXRDR0SM4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app