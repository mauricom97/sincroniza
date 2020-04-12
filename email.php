<?php

if(isset($_POST(['email']) && !empty($_POST['email'])

$nome = addslashes($_POST['name']);
$email =  addslashes($_POST['name']);
$mensagem = addslashes($_POST('message']);


$to = "mauricom7@hotmail.com";
$subject = "Contato - Programador BR";
$body = "Nome: ".$nome. "\r\n".
"Email : ".$email."\r\n".
"Mensagem: ".$mensagem;

$header = "From:mauricionunesdasilvanunes@gmail.com". "\r\n".
         "Replay-To:".$email."\e\n".
         "X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){


    echo("Email enviado com sucesso!");
}else{
    echo("O Email não pode ser enviado");
}


}
?>
