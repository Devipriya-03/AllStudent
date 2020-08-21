<?php
function connect()
{
    $con=mysqli_connect("localhost", "root", "", "gbgcgcv2");
    if(mysqli_connect_errno($con)){
        die("Failed to connect:".mysqli_connect_error());
    }
    return $con;
}
$con=connect();
?>
