import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAKEqge_X40Gyi1IAzcdPx0um-Nv87eL8E",
    authDomain: "disneyplus-clone-619f5.firebaseapp.com",
    projectId: "disneyplus-clone-619f5",
    storageBucket: "disneyplus-clone-619f5.appspot.com",
    messagingSenderId: "564014357603",
    appId: "1:564014357603:web:00361cee2b9e6ca6deec56",
    measurementId: "G-X8Z7S4Q8PH"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

export {auth,provider,storage};
export default db;

