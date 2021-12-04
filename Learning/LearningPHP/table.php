<?php
$db_host = 'localhost';
$db_user = 'root';
$db_password = 'root';
$db_database = 'serverside';



$conn = new PDO("mysql:host=$db_host;dbname=$db_database", $db_user, $db_password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$sql = "SELECT * FROM `user`";
$result = $conn->query($sql)->fetchAll();
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    echo "<table><tr><th>ID</th><th>Firstname</th><th>Lastname </th><th> Email</th></tr>";
    foreach ($result as $row) {
        echo "<tr><td>" . $row["id"] . "</td><td>" . $row["firstname"] . "</td><td>" . $row["lastname"] . "</td><td>" . $row["email"] . "</td></tr>";
    }
    echo "</table>";
    $conn = null;
    ?>
</body>

</html>