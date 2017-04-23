  (function(){


 // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDEbCELVEhU87FItKBf-_UPJhEaC3S__WY",
    authDomain: "sarnar-c3d73.firebaseapp.com",
    databaseURL: "https://sarnar-c3d73.firebaseio.com",
    // projectId: "sarnar-c3d73",
    storageBucket: "sarnar-c3d73.appspot.com",
    // messagingSenderId: "376063013488"
  };
  firebase.initializeApp(config);

  //get element
  const email1 = document.getElementById("email");
//create references
  const dbRefObject = firebase.database().ref().child('email');
  //sync
  dbRefObject.on('value', snap => console.log(snap.val()));

});