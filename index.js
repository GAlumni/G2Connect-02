
    
    // Do not do anything unless the message was from
    // a domain we trust.
    // alert(event);
    // alert(event.origin);
    // if (event.origin !== 'http://127.0.0.1:5000/login') return;

    // // Create a local copy of the variable we were passed.
    // let k = event.data;
    let parUrl = window.location.search;
    let urlParams = new URLSearchParams(parUrl);
    let k = urlParams.get('parameter') // something
    if(k == null || k!="kappa"){
        window.alert("Access Restricted");
        window.location.href = "https://connect2gitam.web.app"; // part 01 link
    }
    else{
        localStorage.clear();
        sessionStorage.clear();
        sessionStorage.setItem("code", "secret");
        window.location.href = "dashboard.html";
    }
    // Do something...

    // Optionally reply to the message (Page A must also have
    // a 'message' event listener to receive this message).
    


// let k = localStorage.getItem("k");
// if(k == null || k!="kappa"){
//     window.alert("Access Denied");
//     window.location.href = "logout.com"; // part 01 link
// }
// else{
//     localStorage.clear();
//     sessionStorage.clear();
//     sessionStorage.setItem("code", "secret");
//     window.location.href = "dashboard.html";
// }
