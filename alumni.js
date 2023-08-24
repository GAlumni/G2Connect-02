let code = sessionStorage.getItem("code");
  if (code == null || code!= "secret") {
    window.alert("Session Expired.");
    window.location.href="logout.html";  // after hosting part 01 
  }
  
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxRiNJNkXeJbtZmRGQOT9MDohOvJtFzls",
  authDomain: "alumnitable.firebaseapp.com",
  databaseURL: "https://alumnitable-default-rtdb.firebaseio.com",
  projectId: "alumnitable",
  storageBucket: "alumnitable.appspot.com",
  messagingSenderId: "989258547701",
  appId: "1:989258547701:web:a5bad788ae47d7a460e0bc",
  measurementId: "G-QRYKGV8RVX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
  getDatabase,
  ref,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

const db = getDatabase();

var tbody = document.getElementById("tbody1");
var call = localStorage.getItem("passValue");
var Sno = 0;


const myJsmedia = (widthSize, trow) => {
  if(widthSize.matches){

  }else{
    trow.style.fontSize="2em";
  }
};

const widthSize = window.matchMedia("(max-width: 412px)");
widthSize.addEventListener("change", myJsmedia);


function AddItemToTable(Name, Status, Lid) {
  ++Sno;
            let trow=document.createElement("tr");
            trow.style.border="1px solid #dddddd";
            trow.style.textAlign="center";
            myJsmedia(widthSize, trow);
            if(Sno%2 == 0){
              trow.style.background="#dddddd";
              trow.style.color="#991f2c";
            }else{
              trow.style.background="#f3f3f3";
            }


  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let a;

  if (Lid === "NA") {
    a = document.createElement("td");
    a.innerHTML = "-";
  } else{
    a=document.createElement("a");
    a.href = Lid;
    a.target = "_blank";
    a.innerHTML = "Click Here"
    a.style.textDecoration = "none"
    a.style.color = "#4B0082"
  }

  td1.innerHTML = Sno;
  td2.innerHTML = Name;
  td3.innerHTML = Status;
  

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(a);

  tbody.appendChild(trow);
}

function AddAllItemsToTable(NTable) {
  Sno = 0;
  tbody.innerHTML = "";
  NTable.forEach((element) => {
    AddItemToTable(element.Name, element.Status, element.Linkdln);
  });
}

function GetAllDataOnce() {
  const dbRef = ref(db);
  get(child(dbRef, call)).then((snapshot) => {
    var NTable = [];
    snapshot.forEach((childSnapshot) => {
      NTable.push(childSnapshot.val());
    });
    AddAllItemsToTable(NTable);
  });
}
window.onload = GetAllDataOnce;