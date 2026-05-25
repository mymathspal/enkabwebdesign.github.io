<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {

    // SMTP SETTINGS
    $mail->isSMTP();

    $mail->Host = 'smtp.gmail.com';

    $mail->SMTPAuth = true;

    $mail->Username = 'nana.abeyie.boateng.15@gmail.com';

    $mail->Password = 'gqiy mhob qakx fooz';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

    $mail->Port = 587;


    // // FORM DATA
    // $name = $_POST['name'];
    // $email = $_POST['email'];
    // $subject = $_POST['subject'];
    // $message = $_POST['message'];


    // EMAIL SETTINGS
    $mail->setFrom('nana.abeyie.boateng.15@gmail.com', 'Website Contact Form');

    $mail->addAddress('nana.abeyie.boateng.15@gmail.com');

    $mail->addReplyTo('nanakab.dev@gmail.com', 'Nana');

    $mail->Subject = $subject;

    $mail->Body = 'You sent the email successfully';


    // SEND
    $mail->send();

    echo "Message sent successfully";

} catch (Exception $e) {

    echo "Mailer Error: {$mail->ErrorInfo}";
}