
<?php


if (isset($_GET['sec']) && isset($_GET['count'])) {
	echo __DIR__;
	$oFile = fopen(__DIR__ . '\data.txt', 'w+');
	$sJson = json_encode([$_GET['sec'], $_GET['count']], true);
	fwrite($oFile, $sJson);
}


if (isset($_GET['get_data'])) {
	echo file_get_contents(__DIR__ . '\data.txt');
}