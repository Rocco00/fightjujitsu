import Firebase from "firebase";
const config = {
    apiKey: "AIzaSyDN0Y_j4aiWRmkLRB9vNOAaoz6p1Ahthyc",
    authDomain: "fight-jujitsu.firebaseapp.com",
    databaseURL: "https://fight-jujitsu.firebaseio.com",
    projectId: "fight-jujitsu",
    storageBucket: "fight-jujitsu.appspot.com",
    messagingSenderId: "447346368246"
  };
  let app = Firebase.initializeApp (config);
  export const db = app.database();