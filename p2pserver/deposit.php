<?php
    require('./crossdomain.php');
    require('./conn.php');
    $id=$_SESSION['id'];
    $chargeMoney=$_GET['charge_money'];
    $rs=mysqli_query($conn,"select total_money from user where id='$id'");
    $data=mysqli_fetch_assoc($rs);
    $totalMoney=$data['total_money'];
    $newMoney=$totalMoney+$chargeMoney;
    $sql="update user set total_money='$newMoney' where id='$id'";
    $result=mysqli_query($conn,$sql);
    if($rs){
        echo 1;
    }else{
        echo 0;
    }
?>