<?php
    require 'connect.php';
    header("Access-Control-Allow-Origin: *");
    error_reporting(E_ERROR);
    $students=[];

    $sql="SELECT personal_details_mdb.user_id,personal_details_mdb.first_name,personal_details_mdb.middle_name,personal_details_mdb.last_name,academic_details.Branch,academic_details.SSC_percent,academic_details.inter_percent,academic_details.b_tech_gpa,academic_details.YOP FROM personal_details_mdb , academic_details WHERE personal_details_mdb.user_id=academic_details.user_id AND academic_details.Program='$category' ";
    
    if($result = mysqli_query($con,$sql))
    {
        $cr=0;
        while($row = mysqli_fetch_assoc($result))
        {
            $students[$cr]['id']=$row['user_id'];
            $students[$cr]['fname']=$row['first_name'];
            $students[$cr]['mname']=$row['middle_name'];
            $students[$cr]['lname']=$row['last_name'];
            $students[$cr]['Branch']=$row['Branch'];
            $students[$cr]['sscmarks']=$row['SSC_percent'];
            $students[$cr]['intermarks']=$row['inter_percent'];
            $students[$cr]['btechgpa']=$row['b_tech_gpa'];
            $students[$cr]['batch']=$row['YOP'];

            $cr++;
        }
        echo json_encode($students);
    }
    else
    {
        http_response_code(404);
    }
?>