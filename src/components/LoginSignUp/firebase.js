import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC5_qCXoq07wasD89IzaC8QENCZCExK0KU",
    authDomain: "social-media-management-c4824.firebaseapp.com",
    projectId: "social-media-management-c4824",
    storageBucket: "social-media-management-c4824.firebasestorage.app",
    messagingSenderId: "85267088100",
    appId: "1:85267088100:web:b13d8501d46b4d0673e2f1",
    measurementId: "G-QT8J4SJSJ2",
    databaseURL:"https://social-media-management-c4824-default-rtdb.firebaseio.com/",

  };

  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);