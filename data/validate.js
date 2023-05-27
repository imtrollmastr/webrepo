function checkPassword() {
    var password = document.getElementById("passwordBox");
    var passwordText = password.value;
    if(passwordText == "yomamaobama") {
      return true;
    }
    if(passwordText == "aquarius1984") {
        return true;
    }
    if(passwordText == "braingames") {
        return true;
    }
    alert("ErrorData: accessdenied; returnedVoid")
    return false
  }

  function checkUsername() {
    var username = document.getElementById("usernameBox");
    var usernameText = username.value;
    if(usernameText == "imtrollmastr") {
      return true;
    }
    if(usernameText == "pooh") {
        return true;
    }
    if(usernameText == "@test") {
        return true;
    }
    alert("ErrorData: accessdenied; returnedVoid")
    return false
  }