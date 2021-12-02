<?php
$name = "Guest";
if (isset($_GET["name"])) {
    $name = $_GET;
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
    <p>Welcome <?php foreach ($name as $val) {
                    echo $val." ";
                }; ?>
    </p>
</body>

</html>