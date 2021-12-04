<?php 
session_start();
$_SESSION["name"]="deep";

var_dump($_SESSION);
session_unset();
session_destroy();
unset($_SESSION);
var_dump($_SESSION);

?>