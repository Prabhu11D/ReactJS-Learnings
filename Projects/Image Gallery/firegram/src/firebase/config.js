import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDgwgBk7RlG3UdputrJTaqhno7F5YQMq-M',
  authDomain: 'firegrame-gallery.firebaseapp.com',
  projectId: 'firegrame-gallery',
  storageBucket: 'firegrame-gallery.appspot.com',
  messagingSenderId: '847253536240',
  appId: '1:847253536240:web:038f88a184b23d4b2fb135',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };
