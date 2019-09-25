// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/6.6.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyB7mq0_BFZreqng_FrdKml5MyMcE6kFLRA",
//     authDomain: "train-schedule-55681.firebaseapp.com",
//     databaseURL: "https://train-schedule-55681.firebaseio.com",
//     projectId: "train-schedule-55681",
//     storageBucket: "train-schedule-55681.appspot.com",
//     messagingSenderId: "669334403620",
//     appId: "1:669334403620:web:02515655ef4fe8601db6b1"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>


var firebaseConfig = {
    apiKey: "AIzaSyB7mq0_BFZreqng_FrdKml5MyMcE6kFLRA",
    authDomain: "train-schedule-55681.firebaseapp.com",
    databaseURL: "https://train-schedule-55681.firebaseio.com",
    projectId: "train-schedule-55681",
    storageBucket: "train-schedule-55681.appspot.com",
    messagingSenderId: "669334403620",
    appId: "1:669334403620:web:02515655ef4fe8601db6b1"
};

// firebase.initializeApp(config);
    

// $("#traininput").on("submit", function (event) {
//     event.preventDefault();

//     database.ref().push({
//         name: name,
//         destination: destination,
//         first: first,
//         frequency: frequency
//     });


//     $("#train-name").val("");
//     $("#train-destination").val("");
//     $("#first-time").val("");
//     $("#frequency").val("");

//     return false;



// });

// Function To add Row To Train Table When Submit Button is Clicked // *

$("#submit").on("click", function (event) {
    event.preventDefault();

// Why if I put the variables below outside this function the values are not placed in the columns when 
// submit button is pressed? 

    var name = $("#train-name").val().trim();
    var destination = $("#train-destination").val().trim();
    var first = $("#first-time").val().trim();
    var frequency = $("#frequency").val().trim();
    

    var addRow = $("<tr>");
    $("#last").append(addRow);

    var col1 = $("<td>").text(name);
    var col2 = $("<td>").text(destination);
    var col3 = $("<td>").text(first);
    var col4 = $("<td>").text(frequency);
    var col5 = $("<td>").text(5);
   

    addRow
    .append(col1)
    .append(col2)
    .append(col3)
    .append(col4)
    .append(col5);

});

var now = moment();
console.log(now);
$("#traininput").append($("<div id='clock'>"));
$("#clock").text(now);

