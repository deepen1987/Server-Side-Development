<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="process.php" method="post">
        <label for="recipename">Recipe name</label>
        <input type="text" name="recipename" id="recipename">
        <label for="step1">Step 1</label>
        <input type="text" name="step1" id="step1">
        <label for="step2">Step 2 </label>
        <input type="text" name="step2" id="step2">
        <label for="step3">Step 3</label>
        <input type="text" name="step3" id="step3">
        <label for="step4">Step 4</label>
        <input type="text" name="step4" id="step4">

        <button type="submit">Create Recipe</button>
    </form>
</body>
</html>