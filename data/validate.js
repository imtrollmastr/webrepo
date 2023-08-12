var account1 = "password"
function checkPassword() {
    var password = document.getElementById("passwordBox");
    var passwordText = password.value;
    if(passwordText == account1) {
      window.location.href="https://imtrollmastr.vercel.app/"
      return true
    }
    alert("ErrorData: accessdenied; returnedVoid")
    return false
  }