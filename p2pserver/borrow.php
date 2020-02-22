<?php
    require('./conn.php');
    $id=$_SESSION['id'];
    $borrowmoney=$_GET['borrowmoney'];
    $interest=$_GET['interest'];
    $minbid=$_GET['minbid'];
    $days=$_GET['days'];
    $title=$_GET['title'];
    $info=$_GET['info'];
    $borrowtime=$_GET['borrowtime'];
    $repaytype=$_GET['repaytype'];
    $bonus=$_GET['bonus'];

    $sql="INSERT INTO borrow (borrowmoney, interest, minbid, days, title, info, borrowtime, repaytype, bonus, userid) VALUES
    ('$borrowmoney', '$interest', '$minbid', '$days', '$title', '$info', '$borrowtime', '$repaytype', '$bonus','$id')";
    // echo $sql;
    $data=mysqli_query($conn,$sql);
    if($data){
        echo 1;
        header('Location:http://localhost:3000/');
    }else{
        echo 0;
    }
?>