<?php
    require('./crossdomain.php');
    require('./conn.php');
    $id=$_SESSION['id'];
    $sql="select education from user where id='$id'";
    $rs=mysqli_query($conn,$sql);
    $num=mysqli_num_rows($rs);
    if($num){
        $data=mysqli_fetch_assoc($rs);
        echo json_encode($data);
    }else{
        echo json_encode(array('status'=>'0'));
    }
?>