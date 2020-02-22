<?php
    require('./crossdomain.php');
    require('./conn.php');
    $id=$_SESSION['id'];
    $sql="select b.*,u.nickname from borrow b join user u on b.userid=u.id";
    $rs=mysqli_query($conn,$sql);
    $num=mysqli_num_rows($rs);
    $result=array();
    if($num){
        while($data=mysqli_fetch_assoc($rs)){
            array_push($result,$data);
        };
        echo json_encode($result);
    }else{
        echo '查询无数据';
    }
?>