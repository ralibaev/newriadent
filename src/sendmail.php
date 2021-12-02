<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);
  $mail->setFrom('ralibaev1@gmail.com', 'Заявка с сайта');
  $mail->addAddress('ralibaev@bk.ru');
  $mail->Subject = 'Заявка, епты';

  $body = '<h1>Заявка с сайта</h1>';
  if (trim(!empty($_POST['name']))) {
    $body.='<p>'.$_POST['name'].'</p>'
  }

  $mail->Body = $body;

  if (!$mail->send()) {
    $message = 'Ошибка';
  } else {
    $message = 'Данные отправлены';
  }

  $response = ['message' => $message];
  header('Content-type: application/json');
  echo json_encode($response);
?>
