let code = sessionStorage.getItem("code");
  if (code == null || code!= "secret") {
    window.alert("Session Expired.");
    window.location.href="logout.html";  // after hosting part 01 
  }

document.getElementById("btn1").addEventListener("click",MyFunction);
      document.getElementById("btn2").addEventListener("click",mYFunction);
      document.getElementById("btn3").addEventListener("click",myFunction);
      document.getElementById("btn4").addEventListener("click",MYFunction);
      document.getElementById("btn5").addEventListener("click",MY_Function);

      function MyFunction(){
        var a = "2024";
        localStorage.setItem("passValue",a);
        window.location.href = "Alumni1.html";
      }
      function mYFunction(){
        var b = "2023";
        localStorage.setItem("passValue",b);
        window.location.href = "Alumni1.html";
      }
      function myFunction(){
        var c = "2022";
        localStorage.setItem("passValue",c);
        window.location.href = "Alumni1.html";
      }
      function MYFunction(){
        var d = "2021";
        localStorage.setItem("passValue",d);
        window.location.href = "Alumni1.html";
      }
      function MY_Function(){
        var a = "2020";
        localStorage.setItem("passValue",a);
        window.location.href = "Alumni1.html";
      }