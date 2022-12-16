<?php
include 'database.php';
$sua = [];
$sql = "SELECT * FROM sua";
if($result = $db->query($sql))
{
$i = 0;
while($row = $result->fetch_assoc())
{
$products[$i]['masua'] = $row['masua'];
$products[$i]['tensua'] = $row['tensua'];
$products[$i]['trongluong'] = $row['trongluong'];
$products[$i]['dongia'] = $row['dongia'];
$products[$i]['maloai'] = $row['maloai'];
$i++;
}
echo json_encode($sua);
}
else
{
http_response_code(404);
}
?>