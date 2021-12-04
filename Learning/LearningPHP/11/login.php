<?php 

if( isset($_POST["username"]) && isset($_POST["password"]) ){
   
   
    if( strlen($_POST["username"]) > 5 && strlen($_POST["username"]) < 20 && strlen($_POST["password"]) > 5 && strlen($_POST["password"]) < 20 ){
        session_start();
        $_SESSION["username"] = $_POST["username"];
        $_SESSION["password"] = $_POST["password"];
        header("Location: home.php");
    }else{
        header("Location: land.php");
    }
}else{
    header("Location: land.php");
}