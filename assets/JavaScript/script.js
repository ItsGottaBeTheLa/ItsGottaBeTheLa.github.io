  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBwum2xPDTA_Z7Vhj7yTS5-w3aC_63SOjQ",
    authDomain: "form-capture-8d8da.firebaseapp.com",
    databaseURL: "https://form-capture-8d8da.firebaseio.com",
    projectId: "form-capture-8d8da",
    storageBucket: "form-capture-8d8da.appspot.com",
    messagingSenderId: "544961497382"
};
firebase.initializeApp(config);

var database = firebase.database();

// Button for form
$("#formButton").on("click", function(event){
    event.preventDefault();
    console.log("button clicked!");

    //Grab user input
    var userName = $("#fname").val().trim();
    console.log(userName);
    
    var userEmail = $("#email").val().trim();
    console.log(userEmail);

    var userPhone = $("#number").val().trim();
    console.log(userPhone);

    var userMessage = $("#message").val().trim();
    console.log(userMessage);

    var userContact = $("#pcontact").val().trim();
    console.log(userContact);

    database.ref().push({
        name: userName,
        email: userEmail,
        number: userPhone,
        message: userMessage,
        contact: userContact,
    });
})