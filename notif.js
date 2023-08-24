let code = sessionStorage.getItem("code");
  if (code == null || code!= "secret") {
    window.alert("Session Expired.");
    window.location.href="logout.html";  // after hosting part 01 
  }
  
  const myJsmedia = (widthSize, trow) => {
    if(widthSize.matches){

    }else{
      trow.style.fontSize="2em";
    }
  };

  const widthSize = window.matchMedia("(max-width: 412px)");
  widthSize.addEventListener("change", myJsmedia);
  var SNo = 0;
    var tbody = document.getElementById("tbody1");

    function AddItemToTable(DateTime, Description, IssuedBy, Link) {
      ++SNo;
      let trow=document.createElement("tr");
      trow.style.border="1px solid #dddddd";
      trow.style.textAlign="center";
      myJsmedia(widthSize, trow);
      if(SNo%2 == 0){
        trow.style.background="#dddddd";
        trow.style.color="#991f2c";
      }else{
        trow.style.background="#f3f3f3";
      }


      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let a = document.createElement("a");
      a.href = Link;
      a.target = "_blank";
      a.innerHTML = "Click Here";
      a.style.textDecoration = "none"
      a.style.color = "#4B0082"

      td1.innerHTML = SNo;
      td2.innerHTML = DateTime;
      td3.innerHTML = Description;
      td4.innerHTML = IssuedBy;

      trow.appendChild(td1);
      trow.appendChild(td2);
      trow.appendChild(td3);
      trow.appendChild(td4);
      trow.appendChild(a);

      tbody.appendChild(trow);
    }

    function AddAllItemsToTable(NTable) {
      SNo = 0;
      tbody.innerHTML = "";
      NTable.forEach((element) => {
        AddItemToTable(element.DateTime,element.Description,element.IssuedBy,element.Link);
      });
    }

    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBbc0WrMrpk0C7EIA8_bJF0H7ifg6ewsoo",
      authDomain: "notificationtable.firebaseapp.com",
      projectId: "notificationtable",
      storageBucket: "notificationtable.appspot.com",
      messagingSenderId: "589840732265",
      appId: "1:589840732265:web:8abea5a6e3e67def8152f8",
      measurementId: "G-HB0RKJ5N4D",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    import {
      getDatabase,
      ref,
      set,
      remove,
      get,
      child,
    } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

    const db = getDatabase();

    function GetAllDataOnce() {
      const dbRef = ref(db);

      get(child(dbRef, "Notification")).then((snapshot) => {
        var NTable = [];
        snapshot.forEach((childSnapshot) => {
          NTable.push(childSnapshot.val());
        });
        AddAllItemsToTable(NTable);
      });
    }

    window.onload = GetAllDataOnce;