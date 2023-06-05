let username = prompt("Enter your username:");

var ErrorData = "Invalid Password (ERROR403_ACCESSREQUESTED)"

var passwordAlertGreeting = "Welcome, imtrollmastr!"

var backupAlertGreeting = "Welcome, backupaccount5"

let password = prompt("Enter your password:");
if (password === "yomamaobama") {
alert(passwordAlertGreeting);
window.location.href = "openadmin.htm";
} else {
alert(ErrorData)
location.reload();
}

if (password === "YoJpingBobo123~!!(BACKUP)1[{}']") {
alert(backupAlertGreeting)
window.location.href = "openadmin.htm";
} else {
alert(ErrorData)
location.reload()
}