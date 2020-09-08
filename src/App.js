import React from "react";
import NoteTaking from "./component/noteTaking";
import "./component/noteTaking.css";

function App() {
  return (
    <div className="note-taking-app">
      <NoteTaking />
    </div>
  );
}

// //Save note message
// function saveMessage() {
//   if (typeof Storage != "undefined") {
//     //Get value of the message
//     var messageInput = document.getElementById("message").value;

//     //Save the value in local storage.
//     localStorage.setItem("message", messageInput);
//     document.getElementById("message").value = localStorage.getItem("message");
//   } else {
//     //Throw an error if browser doesn't support local storage
//     document
//       .getElementById("test")
//       .innerHTML("Sorry, your browser does not support Web Storage...");
//   }
// }
// //Get the value of the message from local storage
// document.getElementById("message").value = localStorage.getItem("message");

export default App;
