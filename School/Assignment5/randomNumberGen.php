<?php
    $value;
    if (isset($_POST["rand_val"])) {
        $value = intval($_POST["rand_val"]);
    }
    $randomNumber = random_int(0, $value);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Number Generator</title>
</head>

<body>
    <form name="rand_num_test" action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="post">
        <label for="rand_val">Enter the Max number</label>
        <input type="text" name="rand_val" id="">
        <button type="submit">Generate</button>
        <button type="submit">Reset</button>
    </form>

    <?php
    if ($value) {
        echo "This is the randomly generated number: $randomNumber";
    }
    ?>
</body>

</html>