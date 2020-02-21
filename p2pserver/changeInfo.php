<?php
    require('./crossdomain.php');
    require('./conn.php');
    $id=$_SESSION['id'];
    $nickname=$_POST['nickname'];
    $pwd=$_POST['pwd'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $edu=$_POST['education'];
    $sql="update user set nickname='$nickname',pwd='$pwd',email='$email',phone='$phone',education='$edu' where id='$id'";
    $rs=mysqli_query($conn,$sql);
    // $data=mysqli_fetch_assoc($rs);
    // $num=mysqli_num_rows($sql);
    if($rs){
        echo 1;
    }else{
        echo 0;
    }
?>