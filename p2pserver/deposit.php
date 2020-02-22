<?php
    require('./crossdomain.php');
    require('./conn.php');
    $id=$_SESSION['id'];
    $chargeMoney=$_GET['charge_money'];
    $rs=mysqli_query($conn,"select total_money,freezed_money from user where id='$id'");
    $data=mysqli_fetch_assoc($rs);
    $newMoney=$data['total_money']+$chargeMoney;
    $usefulMoney=$newMoney-$data['freezed_money'];
    $sql="update user set total_money='$newMoney',useful_money='$usefulMoney' where id='$id'";
    $result=mysqli_query($conn,$sql);
    if($result){
        echo 1;
    }else{
        echo 0;
    }
?>