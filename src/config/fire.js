import firebase from 'firebase';
  var config = {
    apiKey: "AIzaSyAf2412pYTbz7H2wuT6YOvEDk5hRBrd7Vg",
    authDomain: "login-7aeb8.firebaseapp.com",
    databaseURL: "https://login-7aeb8.firebaseio.com",
    projectId: "login-7aeb8",
    storageBucket: "login-7aeb8.appspot.com",
    messagingSenderId: "24961239338"
  };
  const fire = firebase.initializeApp(config);
  export default fire;
