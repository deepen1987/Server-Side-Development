<?php
$blockedSql = ["select", "delete", "update", "insert"];
$userData;
if (isset($_POST["userData"])) {
    if(strlen($_POST["userData"]) > 1){
        $userData = $_POST["userData"];
        $isSqlThere = false;
        foreach ($blockedSql as $value) {
            if(strpos($userData, $value) !== false){
                $isSqlThere = true;
                header("HTTP/1.1 400 BAD REQUEST");
            }
        }

       if(!$isSqlThere){
        header("Location: success.php");
       }
        
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

    <form action="testInjection.php" method="POST">

        <input type="text" name="userData" id="userData">
        <label for="userData"></label>

        <button type="submit">Post</button>
    </form>
</body>

</html>