import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCxBKAUFGbxrphaR5h5T159G79H0mVLqSc",
    authDomain: "chave-roda-app-5d672.firebaseapp.com",
    projectId: "chave-roda-app-5d672",
    storageBucket: "chave-roda-app-5d672.appspot.com",
    messagingSenderId: "1070397014270",
    appId: "1:1070397014270:web:60b68158e682a51cede5af"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);