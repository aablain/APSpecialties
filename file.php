<?php
  // Email to Receive message
  $to = 'A and Ps Email';

  // Subject Title
  $subject = '';

  // Content of Email
  $message = '<h1>' +  + '</h1>';

  // Header Information
  $headers = 'From: The Sender Email <sender@gmail.com>\r\n';
  $headers = 'ReplyTo: usergivenemail@gmail.com';
  $headers = 'Content-type: text/html\r\n';

  // Function that sends Email
  mail($to, $subject, $message, $headers);
?>
