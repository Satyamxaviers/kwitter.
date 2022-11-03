
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA-FFyZKY4UbLyVyz7XvRFC0-0qf7IUHxw",
  authDomain: "call-of-duty-mobile-club.firebaseapp.com",
  projectId: "call-of-duty-mobile-club",
  storageBucket: "call-of-duty-mobile-club.appspot.com",
  messagingSenderId: "383500843759",
  appId: "1:383500843759:web:270ebd3ba3e0470c60391a",
  measurementId: "G-ZHKLB7QXDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
          console.log("room_name - " + Room_names )
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'  >4"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML+= row;

      });});}
getData();


function addRoom()
{
  room_name = document.getElementById(room_name).value

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name)

  window.location = "kwitter_page.html";
}