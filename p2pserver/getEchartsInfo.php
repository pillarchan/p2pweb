<?php
    require('./conn.php');
    require('./crossdomain.php');
    $sql="SELECT interest,COUNT(interest) AS cnt FROM borrow group by interest order by cnt desc;";
    $rs=mysqli_query($conn,$sql);
    $arr=array();
    // $num=mysqli_num_rows($rs);
    // echo trim($num);
    while($row=mysqli_fetch_assoc($rs)){
        array_push($arr,$row);
    }
    echo json_encode($arr);