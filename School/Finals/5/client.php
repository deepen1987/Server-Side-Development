<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>
<p id="JSON"></p>
    <?php
    echo '<script type="text/JavaScript"> 
    const jsonid = document.getElementById("JSON");

    const url = `http://localhost:3000/`;
    fetch(url, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((data) => {
                        jsonid.innerHTML = `<p>Name: ${data.name}</p> 
                        <p>Age: ${data.age}</p>
                        <p>Website: ${data.website}</p>
                        <p>Height: ${data.height}</p>
                        <p>Notes: ${data.notes}</p>                   `
        })
        .catch((err) => console.log(err));
     </script>';
    ?>
    
</body>

</html>