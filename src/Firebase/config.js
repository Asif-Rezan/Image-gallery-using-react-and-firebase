// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
import "firebase/storage"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAefgE6ABICniWI93CHYZwfCa0PWxi2kos",
  authDomain: "image-gallery-154b3.firebaseapp.com",
  projectId: "image-gallery-154b3",
  storageBucket: "image-gallery-154b3.appspot.com",
  messagingSenderId: "460299685936",
  appId: "1:460299685936:web:c7a276bdbaacd2322d9df5",
  measurementId: "G-L9Y2SDYF71"
};

firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore= firebase.firestore();

const timestamp=firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp}
