import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyBEMPW1ggWTwI8ixCf8oSDexTmFw7j3YAg",
    authDomain: "sistema-75a48.firebaseapp.com",
    projectId: "sistema-75a48",
    storageBucket: "sistema-75a48.appspot.com",
    messagingSenderId: "796743073425",
    appId: "1:796743073425:web:b4d6fd78f7cf7f31af4930",
    measurementId: "G-V4G5CJN1KM"
  };
  
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;