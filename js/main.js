// Initialize Firebase
var config = {
  apiKey: "AIzaSyCz4cNGKdY1-KxVH_PsHLabcOPf5312Lwc",
  authDomain: "contactform-f1681.firebaseapp.com",
  databaseURL: "https://contactform-f1681.firebaseio.com",
  projectId: "contactform-f1681",
  storageBucket: "contactform-f1681.appspot.com",
  messagingSenderId: "701966940024"
};
firebase.initializeApp(config);

//References messages collection
var messagesRef = firebase.database().ref('messages');

//Add event listener submit contactForm
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e) {
  e.preventDefault();

  //Get value
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  saveMessage(name, company, email, phone, message);

  //Alert
  document.querySelector('.alert').style.display = 'block';

  //Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  },3000);

  //Clear field form
  document.getElementById('contactForm').reset();
}

//function to get form value
function getInputVal(id) {
  return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
