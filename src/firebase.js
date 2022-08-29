import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAy7xooXga_M_KdHPBZba-a-7gm2P39pJw",
    authDomain: "linkedin-clone-56f06.firebaseapp.com",
    projectId: "linkedin-clone-56f06",
    storageBucket: "linkedin-clone-56f06.appspot.com",
    messagingSenderId: "691627239000",
    appId: "1:691627239000:web:f070030583790e5c90cc2d",
    measurementId: "G-L749HEYP7B"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth =firebase.auth();

  export {db ,auth}