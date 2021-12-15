<?php 
session_start();
$_SESSION["quoteid"]=1;
$_SESSION["sessionToken"]="MyAssignedToken";


$quote_v = $_SESSION["quoteid"];
$session_v = $_SESSION["sessionToken"];

echo "Quote ID: ".$quote_v." Session Token: ".$session_v;

session_unset();
session_destroy();

?>