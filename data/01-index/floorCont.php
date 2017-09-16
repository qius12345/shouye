<?php
header('Content-Type: application/json;charset=UTF-8');

require_once("../init.php");

$sql = "SELECT title,tips1,tips2,tips3,tips4 FROM floor_cont";
echo json_encode(sql_execute($sql));
?>