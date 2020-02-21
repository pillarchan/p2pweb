<?php
require('./crossdomain.php');
// echo 'ok';
if(count($_SESSION)!=0){
    echo $_SESSION['username']; 
}else{
    echo 'nologin';
}