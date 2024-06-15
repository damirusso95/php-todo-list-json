<?php

// metodo che recupere e restituisce il contenuto del file
$fileContent = file_get_contents("dati.json");

header('content-type: application/json');

echo $fileContent;



// $jsonString = json_encode($todo);

// echo $jsonString;