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
<script>


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("JSON").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET", "jsonData.php", true);
    xmlhttp.send();
  

</script>
</body>
</html>