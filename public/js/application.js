
var config = {
   apiKey: "AIzaSyDEbCELVEhU87FItKBf-_UPJhEaC3S__WY",
    authDomain: "sarnar-c3d73.firebaseapp.com",
    databaseURL: "https://sarnar-c3d73.firebaseio.com",
    projectId: "sarnar-c3d73",
    storageBucket: "sarnar-c3d73.appspot.com",
};

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to the recommendations object in your Firebase database
var recommendations = firebase.database().ref("recommendations");

// Save a new recommendation to the database, using the input in the form
var submitRecommendation = function () {

  // Get input values from each of the form elements
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  // Push a new recommendation to the database using those values
  recommendations.push({
    "name": name,
    "email": email,
    "message": message
  });
};


$(window).load(function () {

  $("#recommendationForm").submit(submitRecommendation);

});