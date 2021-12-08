<?php 

$replace = ["Insert", "Update", "Delete", "Select"];
$myfile = fopen("hello.txt", "r") or die("Unable to open file");
$output =  fread($myfile,filesize("hello.txt"));
$replacedoutput = str_replace($replace,"",$output);


fclose("hello.txt");

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

<p><?php echo $output?> </p>
<p> <?php echo $replacedoutput ?></p>
</body>
</html>