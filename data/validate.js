var account1 = "password"
function checkPassword() {
    var password = document.getElementById("passwordBox");
    var passwordText = password.value;
    if(passwordText == account1) {
      return true;
      window.location.href="https://imtrollmastr.vercel.app/"
    }
    alert("ErrorData: accessdenied; returnedVoid")
    return false
  }