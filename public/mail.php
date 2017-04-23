<?php
	include_once('dbConnect.php');
	

   $to = "agarwal.sween@gmail.com";

   $subject = "My subject";

   $txt = "Hello world!";

   $headers = "From: dummy@email.com";



   mail($to,$subject,$txt,$headers);


?>