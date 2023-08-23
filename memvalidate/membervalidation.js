function validate() {
    var loginusr = prompt("Enter imtrollmastr Website Username: ");
    if(loginusr == "imtrollmastr") {
        var loginpsw = prompt("Enter imtrollmastr Website Password: ");
        if(loginpsw == "admin") {
            window.location.href = "";
        }
        else {
            console.log("Auth failed");
            window.location.reload();
        }
    }
    else {
        console.log("Auth failed");
        window.location.reload();
    }
}

function githubauth() {
    window.location.href='https://github.com/login/oauth/authorize?client_id=56e4adfc39ec078525b4&redirect_uri=https://imtrollmastr.vercel.app/memportal.html&scope=user:email,read:user/'
}