<?php 
require_once("db.php");

$check = 1;
foreach ($_POST as $key => $value) {

    if( empty($_POST["$key"]) ){
        $check = 0;
        break;
    }
}
if($check === 0){
    header("Location: recipedb.php");
}

$recipename = $_POST["recipename"];
$step1 = $_POST["step1"];
$step2 = $_POST["step2"];
$step3 = $_POST["step3"];
$step4 = $_POST["step4"];


$createSQL = "CREATE TABLE recipe (
    recipename VARCHAR(100), step1 VARCHAR(100), step2 VARCHAR(100), step3 VARCHAR(100), step4 VARCHAR(100))";
tryCatchPDO($conn->exec($createSQL), "Table Created Successfully");

$insertSQL = "INSERT INTO recipe(recipename, step1, step2, step3, step4) 
              VALUES('$recipename', '$step1', '$step2', '$step3', '$step4')";
tryCatchPDO($conn->exec($insertSQL), "Insert happened successfully");

function tryCatchPDO($statement,$success){
    try {
        $statement;
        echo $statement;
    } catch (PDOException $err) {
        echo $err-> getMessage();
    }
}

$conn = null;
?>