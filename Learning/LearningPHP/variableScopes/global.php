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
    $globalName = "Deependra";

    if(true){
        echo "<p> If Name1: $globalName </p>";
    }
    
    function localVar(){
        // Cannot be accessed in local scope. Function has a local scope and this generates a error.
        echo "<p> If Name2: $globalName </p>";
    }
    localVar();

    function globalKey(){
        global $globalName;
        echo "<p> If global Name3: $globalName </p>";
    }
    globalKey();

    function globalVar(){
        
        echo "<p> If GLOBALS Name4:". $GLOBALS["globalName"]. "</p>";
    }
    globalVar();
    
    ?>    


</body>
</html>