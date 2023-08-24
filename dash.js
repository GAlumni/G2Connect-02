
function MyFunction() {
    window.location.href="eng.html";
  }
function myFunction(){
    window.location.href="manage.html";
}
function mYFunction(){
  window.location.href="science.html";
}
function MYFunction(){
  window.location.href="medical.html"
}
function my_Function(){
  window.location.href="alumni.html";
}
let loader = document.getElementById('preloader');
window.addEventListener('load', function(){
    loader.style.display = "none";
})
  function logout(){
    let params = {};
    let regex= /([^&=]+)=([^&]*)/g,m
    while(m=regex.exec(location.href)){
        params[decodeURIComponent(m[1])]=decodeURIComponent(m[2])
    }
    if(Object.keys(params).length>0){
        localStorage.setItem('authInfo',JSON.stringify(params))
    }
    
    let info=localStorage.getItem('authInfo');
    
    if((info != null)){
      if(info["access_token"]){}
      else return;
    }
    else{
      return;
    }
    info = JSON.parse(info);
    fetch("https://oauth2.googleapis.com/revoke?token="+info['access_token'],{
        method:'POST',
        headers:{
            'Content-type':'application/x-www-form-urencoded'
        }
    })
    .then((data)=> {});
}

let code = sessionStorage.getItem("code");
  if (code == null || code!= "secret") {
    window.alert("Session Expired.");
    window.location.href="logout.html";  // after hosting part 01 
  }

  let signOut = document.getElementById("signOut");
    signOut.addEventListener('click',function(){
    logout();
    window.location.href="logout.html"; //change
});
