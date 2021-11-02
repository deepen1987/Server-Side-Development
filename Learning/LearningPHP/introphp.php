<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .early{
            background-color: orange;
            color: white;
        }
        .late{
            background-color: teal;
            color: white;
        }
    </style>
</head>

<body>
    <?php 
        // Variable assignment
        $seconds = intval(date('s'));
        // If statement
        if($seconds < 30){
            $class = 'early';
        }else{
            $class = 'late';
        }
        
        // Strings
        $firstname = "Deependra";
        $lastname = "Shekhawat";
        $fullname = "$firstname $lastname";

        // Handling Arrays
        $names = ["Neha", "Yash", "Om", "Seema"]; // Array Declaration

        //Adding elements to an Array
        $names[] = "Deependra";

        // To Check size or count of elements in php
        echo sizeof($names);
        echo count($names);

        // deleting something from my array
        unset($names[2]);

        // Resetting the array
        $names = []
    ?>

    <!-- Adding php variable values dynamically in the HTML -->
    <p class="<?= $class ?>"><?= $seconds ?>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nesciunt laboriosam amet a voluptas 
        tempora pariatur repudiandae autem, id incidunt sapiente ad accusantium harum. Iusto alias eligendi 
        consequatur accusamus esse?
    </p>
    <div>
        <?= $fullname ?>
    </div>
</body>

</html>