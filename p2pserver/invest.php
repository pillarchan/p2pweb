<?php
    require('./conn.php');
    require('./crossdomain.php');
    $id=$_SESSION['id'];
    $borrowId=$_GET['borrow_id'];
    $investMoney=$_GET['invest_money'];
    $sql="SELECT useful_money,freezed_money FROM user WHERE id=$id;";
    $rs=mysqli_query($conn,$sql);
    $data=mysqli_fetch_assoc($rs);
    if($data['useful_money']>=$investMoney){
        $newUsefulMoney=$data['useful_money']-$investMoney;
        $newFreezedMoney=$data['freezed_money']+$investMoney;
        $newTotalMoney=$newUsefulMoney+$newFreezedMoney;
        $sqlUpdate="UPDATE user SET total_money=$newTotalMoney,useful_money=$newUsefulMoney,freezed_money=$newFreezedMoney WHERE id=$id";
        $updateData=mysqli_query($conn,$sqlUpdate);
        if($updateData){
            $sqlBorrow="UPDATE borrow SET investmoney=(SELECT investmoney+$investMoney WHERE id=$borrowId) WHERE id=$borrowId";
            $borrowRs=mysqli_query($conn,$sqlBorrow);
            echo $borrowRs;
        }else{
            echo 0;
        }
    }else{
        echo 2;
        return;
    }