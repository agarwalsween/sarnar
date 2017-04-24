 'use strict';

var submit = document.getElementById('submit');
var name = document.getElementById('name');
var email = document.getElementById('email');
var message = document.getElementById('message');


function writeNewPost(name, email, message) {
  // A post entry.
  var postData = {
    name: name,
    email: email,
    message: message
  };

return firebase.database().ref().push(postData);
  // Get a key for a new Post.
  // var newPostKey = firebase.database().ref().child('posts').push().key;

  // // Write the new post's data simultaneously in the posts list and the user's post list.
  // var updates = {};
  // updates['/posts/' + newPostKey] = postData;
  // return firebase.database().ref().update(updates);
}


window.addEventListener('load', function() {
  // Bind Sign in button.
  submit.addEventListener('click', function(e) {
    e.preventDefault();
    var name = 'sween';   
    var email = 'abc@a.com';
    var message = 'hello';

    if (name && email && message) {
      writeNewPost(name, email, message);
    }
  });
}, false);                        
