<?php

require_once __DIR__ . '/vendor/autoload.php';

$client = new Google_Client(['client_id' => '720327052488-ibslkp5h4q5igu1ee368j939ra8op93b.apps.googleusercontent.com']);

function verify_token($token) {
  global $client;
  try {
    $payload = $client->verifyIdToken($token);
    if ($payload) {
      return $payload;
    } else {
      return null;
    }
  } catch (Exception $e) {
    return null;
  }
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(404);
  exit();
}

$token = $_POST['idtoken'];
$payload = verify_token($token);

if ($payload) {
  $email = $payload['email'];
  // The token is valid, you can authenticate the user and create a session
  // (replace this with your own authentication and session creation code)
  session_start();
  $_SESSION['email'] = $email;
  echo json_encode(['success' => true]);
} else {
  // The token is invalid or expired, return an error response
  http_response_code(401);
  echo json_encode(['success' => false, 'error' => 'Token verification failed']);
}

session_start();

if (isset($_SESSION['email'])) {
  // The user is already authenticated, redirect to the homepage
  header('Location: /index.html');
  exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Handle the ID token verification and user authentication here
  // (see the previous steps for details)
} else {
  // The user is not authenticated, show the login page
  include 'login.html';
}

?>


