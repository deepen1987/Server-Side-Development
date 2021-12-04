<?php 
  $db_host = 'localhost';
  $db_user = 'root';
  $db_pwd = 'root';
  $db_database = 'serverside';

  try {
      $conn = new PDO("mysql:host=" . $db_host . ";dbname=" . $db_database, $db_user, $db_pwd);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $sql = "INSERT INTO user(id, email, firstname, lastname) VALUES (6, 'deepen@0.com', 'Sharad', 'Bais')";
      $affectedRowCount = $conn->exec($sql);

      echo $affectedRowCount;
      
  } catch (PDOException $err) {
      echo "Connection failed: " . $err -> getMessage();
  }


$conn = null;
?>