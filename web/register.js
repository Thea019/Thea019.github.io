var registeredButton = document.getElementById("registerButton");

var userRegistered = false;
function addUserAndPasswordToDatabase(userNew,passwordNew) {
    var userNew = document.getElementById("usernameRegister").value;
    var passwordNew = document.getElementById("passwordRegister").value;
    database.signUp(userNew,passwordNew);
   window.location.assign("login.html");

}

registeredButton.addEventListener("click", addUserAndPasswordToDatabase);

registeredButton.addEventListener("mouseleave", function returnLogin(userRegistered) {
    if( userRegistered ) {
        console.log("registered");
       
    }
});
