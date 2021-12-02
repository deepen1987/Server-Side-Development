<?php
$age;
$lastname;
if (isset($_GET["age"]) && isset($_GET["lastName"])) {
    $age = $_GET["age"];
    $lastname = $_GET["lastName"];
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
    <form action="twovar.php" method="get">
        <input type="number" name="age" id="age">
        <label for="age">age</label>
        <input type="text" name="lastName" id="lastName">
        <label for="lastName"></label>

        <button type="submit">Submit</button>

    </form>
    <p> <?php
        if ($age && $lastname) {
            echo "Age: " . $age . " Lastname: " . $lastname;
        }
        ?> </p>
</body>

</html>