import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'lei-blog-1ba86.firebaseapp.com',
  projectId: 'lei-blog-1ba86',
  storageBucket: 'lei-blog-1ba86.appspot.com',
  messagingSenderId: '145659832574',
  appId: '1:145659832574:web:f058ab5721e478783addaf',
  measurementId: 'G-HJ0FS67VMS',
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebase = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();

export default firebase;
