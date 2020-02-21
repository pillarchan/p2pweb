<?php
    require('./conn.php');
    header('Content-Type:text/json;charset=utf-8');
    $username=$_POST['username'];
    $pwd=$_POST['pwd'];
    if($username!='' && $pwd!=''){
        $sql="select * from user where username='$username' and pwd='$pwd'";       
        $rs=mysqli_query($conn,$sql);
        $num=mysqli_num_rows($rs);
        if($num){
            //将用户名保存到session中
            $_SESSION['username']=$username;
            header("Location:http://localhost:3000/");
        }else{
            header("Location:http://localhost:3000/login.html?fail=fail");
        }
    }else{
        header("Location:http://localhost:3000/login.html?fail=fail");
    }
