<?php
    require('./crossdomain.php');//跨域
    require('./conn.php');//连接数据库
    $id=$_SESSION['id'];

    $startPage=$_GET['start_page'];
    $pageCount=$_GET['page_count'];
    $showPage=($startPage-1)*$pageCount;
    $sqlCount="SELECT COUNT(id) FROM borrow";
    $countrs=mysqli_query($conn,$sqlCount);
    $countData=mysqli_fetch_assoc($countrs);
    // $countDataRs=json_encode($countData);
    $maxPage=ceil($countData['COUNT(id)']/$pageCount);
    $sql="select b.*,u.nickname from borrow b join user u on b.userid=u.id limit $showPage,$pageCount";
    $rs=mysqli_query($conn,$sql);
    $num=mysqli_num_rows($rs);
    $result=array();
    if($num){
        while($data=mysqli_fetch_assoc($rs)){
            array_push($result,$data);
        };
        $obj=(object)['maxPage'=>$maxPage,'result'=>$result];
        echo json_encode($obj);
    }else{
        echo 0;
        // echo json_encode(array('status'=>0));
    }
?>