<?php
    require 'connect.php';
    header("Access-Control-Allow-Origin: *");
    error_reporting(E_ERROR);
    $students=[];
    $sql="SELECT * FROM user";
    if($result = mysqli_query($con,$sql))
    {
        $cr=0;
        while($row = mysqli_fetch_assoc($result))
        {
            $students[$cr]['id']=$row['user_id'];
            $students[$cr]['camp']=$row['campus_id'];
            $students[$cr]['type']=$row['type'];
            $cr++;
        }
        echo json_encode($students);
    }
    else
    {
        http_response_code(404);
    }
?>