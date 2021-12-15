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
        // Associative Array

        $reportCard=array( 
        "sheehan"=> array( "601" => 98 ),
        "smitty"=> array( "601" => 95 )
        ); ?>

        <p> <?php
            echo "The grade for sheehan in 601 is " . $reportCard["sheehan"]["601"];
            echo ". The grade for smity in 601 is " . $reportCard["smitty"]["601"];
            ?></p>

</body>

</html>