<?php
    require('./crossdomain.php');
    require('./conn.php');
    $id=$_SESSION['id'];
    $sql="select username,nickname,lastlogintime,total_money,useful_money,freezed_money from user where id='$id'";
    $rs=mysqli_query($conn,$sql);
    $num=mysqli_num_rows($rs);
    if($num){
        $data=mysqli_fetch_assoc($rs);
        echo json_encode($data);
    }else{
        echo '查询无数据';
    }
?>