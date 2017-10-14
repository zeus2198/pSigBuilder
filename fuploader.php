<?php
if(!isset($_GET['files']))
{
	echo "kthnxbai";
	exit();
}
sleep(2);
$uploaddir = 'gd_fonts/';

foreach($_FILES as $file)
{
	if($file['size'] < 2)
	{
		echo json_encode(array('error' => 'File size less than 2 bytes. Looks like a fake file.'));
		exit();
	}
	if($file['size'] > 200000)
	{
		echo json_encode(array('error' => 'File larger than 200kb.'));
		exit();		
	}
	$target = $uploaddir .str_ireplace("ttf", "ttf", basename($file['name']));
	if(pathinfo($target,PATHINFO_EXTENSION) != "ttf")
	{
		echo json_encode(array('error' => 'File type should be .ttf'));
		exit();
	}
	if(file_exists($target))
	{
		echo json_encode(array('error' => 'File of that name already exists, change name and try uploading.'));
		exit();
	}
    if(!move_uploaded_file($file['tmp_name'], $target))
    {
        echo json_encode(array('error' => 'Error in uploading.'));
		exit();
    }
	echo json_encode(array('font' => $file['name']));
}

?>