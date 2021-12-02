<?php
$display = 0;
if (isset($_POST["val1"]) && isset($_POST["val2"])) {
    $val1 = $_POST["val1"];
    $val2 = $_POST["val2"];

    if (isset($_POST["add"])) {
        $display = addition($val1, $val2);
    }

    if( isset($_POST["sub"]) ){
        $display = subtract($val1, $val2);
    }
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

    <form action="calc.php" method="POST">
        <input type="number" name="val1" id="val1">
        <label for="val1"></label>
        <input type="number" name="val2" id="val2">
        <label for="val2"></label>
        <?php
        function addition($first, $second)
        {
            return $first + $second;
        }

        function subtract($first, $second){
            return $first - $second;
        }

        ?>
        <button type="submit" name="add">Add</button>
        <button type="submit" name="sub">Sub</button>
    </form>

    <p>Output = <?php echo $display ?></p>

</body>

</html>