<?php 
  $db_host = 'localhost';
  $db_user = 'root';
  $db_pwd = 'root';
  $db_database = 'serverside';

  try {
      $conn = new PDO("mysql:host=" . $db_host . ";dbname=" . $db_database, $db_user, $db_pwd);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $sql = "INSERT INTO users(email, password) VALUES ('test@bu.edu', 'test_pswd')";
      $affectedRowCount = $conn->exec($sql);

      echo $affectedRowCount;
      
  } catch (PDOException $err) {
      echo "Connection failed: " . $err -> getMessage();
  }


$conn = null;
?>