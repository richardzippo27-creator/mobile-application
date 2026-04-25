// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getDatabase,
  set,
  get,
  ref,
  update,
  remove,
  push,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
// initializeApp – to initialize your Firebase app.
// getDatabase – to get a reference to the Firebase Realtime Database.
// set – to write data to the database.
// get – to read data from the database.
// ref – to create references (paths) in the database.
=
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8uAIOoEZeu7Kj5_b9WntUYsWUgKsQ4dY",
  authDomain: "mobileprogramming-86b4d.firebaseapp.com",
  databaseURL: "https://mobileprogramming-86b4d-default-rtdb.firebaseio.com",
  projectId: "mobileprogramming-86b4d",
  storageBucket: "mobileprogramming-86b4d.firebasestorage.app",
  messagingSenderId: "298265972730",
  appId: "1:298265972730:web:e21779834bfea4a4699e43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const db = getDatabase(app);

function writeContactData(userID, firstname, lastname, phone, email, address) {
  return set(ref(db, "contacts/" + userID), {
    userID: userID,
    firstname: firstname,
    lastname: lastname,
    phone: phone,
    email: email,
    address: address,
  });
}

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userID = document.getElementById("userID").value.trim();
  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();

  const msgEl = document.getElementById("message");

  writeContactData(userID, firstname, lastname, phone, email, address)
    .then(() => {
      msgEl.textContent = "Contact saved successfully!";
      msgEl.className = "success";
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      msgEl.textContent = "Error: " + error.message;
      msgEl.className = "error";
    });
});
