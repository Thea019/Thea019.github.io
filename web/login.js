//import {database} from '../register';
var logInButton = document.getElementById("log-in");
var signUpButton = document.getElementById("sign-up");

logInButton.addEventListener("click", function () {
    console.log("bla")
    let user = document.getElementById("username").value;
    let password = document.getElementById("password").value;
   if(false === database.loginUser(user,password)) {
     alert('you have give the wrong password or username');
   }
    
 
});

signUpButton.addEventListener("click", function() {
    window.location.assign("register.html");
});

