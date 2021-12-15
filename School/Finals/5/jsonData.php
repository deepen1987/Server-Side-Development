<?php
$json = array("name"=>"Charles Summer", "age"=>45.34, "website"=>"https://www.test.com", "height"=>"Not Disclosed","notes"=>"@copy; All Rights Reserved" );

$jsonobj = json_encode($json);

$obj = json_decode($jsonobj);

echo "<p>Name: ".$obj->name."</p>";
echo "<p>Age: ".$obj->age."</p>";
echo "<p>Website: ".$obj->website."</p>";
echo "<p>Height: ".$obj->height."</p>";
echo "<p>Notes: ".$obj->notes."</p>";
?>