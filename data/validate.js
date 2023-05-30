function checkPassword() {
    var password = document.getElementById("passwordBox");
    var passwordText = password.value;
    if(passwordText == "password") {
      return true;
    }
    alert("ErrorData: accessdenied; returnedVoid")
    return false
  }