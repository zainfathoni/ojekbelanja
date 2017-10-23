var firebase = require("firebase/app");
require("firebase/auth");

var config = {
  apiKey: "AIzaSyAxEtU2NTT51cYCtXEhneq6xBqbaU5rcFU",
  authDomain: "ojekbelanja.firebaseapp.com",
  databaseURL: "https://ojekbelanja.firebaseio.com",
  storageBucket: "ojekbelanja.appspot.com",
  messagingSenderId: "952122011257"
};
firebase.initializeApp(config);

export default firebase;
