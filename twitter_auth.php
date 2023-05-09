<?php

// Replace with your own values
$oauth_client_id = 'OEhMTTVoQUw4ZXdYb1Rsem84ZUo6MTpjaQ';
$oauth_client_secret = 'lOY3JR1zmf-mvKbv83AHbFA9Sxnhx-8BGgXTaI5ViBz8lh3IzH';
$oauth_redirect_uri = 'https://imtrollmastr.vercel.app/';
$oauth_scopes = 'profile,openid'; // Comma-separated list of scopes

// Construct the authorization URL
$auth_url = 'https://api.twitter.com/oauth2/authenticate';
$auth_params = array(
    'client_id' => $oauth_client_id,
    'response_type' => 'code',
    'redirect_uri' => $oauth_redirect_uri,
    'scope' => $oauth_scopes
);
$auth_url .= '?' . http_build_query($auth_params);

// Output the authorization URL
echo $auth_url;