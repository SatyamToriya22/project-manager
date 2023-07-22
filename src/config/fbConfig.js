import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBWG735TR8iVzmE22bv4-wEHhk8QjS3_So',
  authDomain: 'my-project-manager-1da97.firebaseapp.com',
  projectId: 'my-project-manager-1da97',
  storageBucket: 'my-project-manager-1da97.appspot.com',
  messagingSenderId: '455979424209',
  appId: '1:455979424209:web:38a4b1fdb97455901ca8f0',
  measurementId: 'G-GTQQL8LG7T',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
