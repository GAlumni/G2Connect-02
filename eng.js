document.getElementById("Internships").addEventListener("click",fun1);
document.getElementById("CompVisit").addEventListener("click",fun2);
let a = "ENGINEERING";
localStorage.setItem("passValue",a);
        
function fun1(){
    window.location.href = "InternshipTable.html";
}
function fun2() {
    window.location.href = "CompanyTable.html";
}

let code = sessionStorage.getItem("code");
  if (code == null || code!= "secret") {
    window.alert("Session Expired.");
    window.location.href="logout.html";  // after hosting part 01 
  }