<?php
if(!isset($_POST['core']))
{
	echo "kthnxbai.";
	exit();
}
sleep(3.5);
function randomstring($l = 8)
{
	$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    while($l--)
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    return $randomString;
}
$json = $_POST['core'];
$fname = randomstring();
while(file_exists($fname))$fname = randomstring();
$f = fopen('templates/'.$fname.'.ini', 'a');
fwrite($f, $json);
fclose($f);
echo $fname;
?>