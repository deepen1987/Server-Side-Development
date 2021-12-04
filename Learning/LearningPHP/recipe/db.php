<?php 

$db_host = 'localhost';
$db_user = 'root';
$db_password = 'root';
$db_database = 'serverside';


try {
    $conn = new PDO("mysql:host=$db_host;dbname=$db_database",$db_user,$db_password);
    $conn-> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch (PDOException $err) {
    echo "Connection Failed".$err -> getMessage();
    exit();
}


?>