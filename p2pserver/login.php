<?php
    require('./conn.php');
    header('Content-Type:text/json;charset=utf-8');
    date_default_timezone_set( 'Asia/Shanghai' );
    $username=$_POST['username'];
    $pwd=$_POST['pwd'];
    $curTime=date('Y-m-d H:i:s');
    echo $curTime;
    if($username!='' && $pwd!=''){
        $sql="select * from user where username='$username' and pwd='$pwd'";       
        $rs=mysqli_query($conn,$sql);
        $num=mysqli_num_rows($rs);
        if($num){
            //将用户名保存到session中
            $data=mysqli_fetch_assoc($rs);
            $_SESSION['username']=$username;
            $id=$data['id'];
            $_SESSION['id']=$id;
            mysqli_query($conn,"update user set lastlogintime='$curTime' where id='$id'");            
            header("Location:http://localhost:3000/");
        }else{
            header("Location:http://localhost:3000/login.html?fail=fail");
        }
    }else{
        header("Location:http://localhost:3000/login.html?fail=fail");
    }
