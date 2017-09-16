<?php
header('Content-Type: application/json;charset=UTF-8');

require_once("../init.php");

$sql = "SELECT img,href FROM mainpt";
echo json_encode(sql_execute($sql));
?>