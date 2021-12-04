<?php 
$db_host = 'localhost:3306';
$db_user = 'root';
$db_password = 'welcome1';
$db_database = 'sql_store';

try {
    $conn = new PDO("mysql:host=" . $db_host . ";dbname=" . $db_database, $db_user, $db_password);
    $conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connected Successfully";
} catch (PDOException $err) {
    echo "Connection Failed".$err -> getMessage();
}
$conn = null;
?>