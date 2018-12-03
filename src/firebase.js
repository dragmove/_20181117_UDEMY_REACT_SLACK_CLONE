import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Initialize Firebase
// https://firebase.google.com/docs/web/setup?authuser=0#add_firebase_to_your_app
const config = {
  apiKey: 'AIzaSyA6b8QIKvLWzj5lL4qxXeDJXxmrEF3YVXE',
  authDomain: 'react-slack-clone-b9b56.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-b9b56.firebaseio.com',
  projectId: 'react-slack-clone-b9b56',
  storageBucket: 'react-slack-clone-b9b56.appspot.com',
  messagingSenderId: '50589806413'
};

firebase.initializeApp(config);

export default firebase;
