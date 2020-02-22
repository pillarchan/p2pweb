<?php
require('./crossdomain.php');
// echo 'ok';
session_destroy();
header("Location:http://localhost:3000/");