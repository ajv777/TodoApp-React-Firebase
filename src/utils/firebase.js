import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD2CMfPCM_ewgC2KnpeFPKypnqM_HXK7-U",
  authDomain: "todo-react-firebase-6b967.firebaseapp.com",
  databaseURL: "https://todo-react-firebase-6b967.firebaseio.com",
  projectId: "todo-react-firebase-6b967",
  storageBucket: "todo-react-firebase-6b967.appspot.com",
  messagingSenderId: "19969735392",
  appId: "1:19969735392:web:7ec2ce5888fb3ad198ee85",
};

export default firebase.initializeApp(firebaseConfig);
