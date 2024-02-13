


import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWHFQmfW-5LEUxYGlccRFn_1iczlOheDo",
  authDomain: "biodiversity-nexus.firebaseapp.com",
  projectId: "biodiversity-nexus",
  storageBucket: "biodiversity-nexus.appspot.com",
  messagingSenderId: "101316835750",
  appId: "1:101316835750:web:7e0ac9d74af5b9a228b767",
  measurementId: "G-6YQ5VNRRPJ"
};

// Initialize Firebase
const app = getApps().length ? getApp : initializeApp(firebaseConfig);
const auth = getAuth(app);