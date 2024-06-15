<?php

// leggo il file json dal disco
$fileContent = file_get_contents("dati.json");

// converto il json in un array associativo php
$list = json_decode($fileContent, true);


// creo una nuova task
$newTask = [
        "task" => $_POST["task"]
];

// pusho la nuova task nel mio array
$list[] = $newTask;

// converto l'array in json
$listJson = json_encode($list);

// scrivo il json sul disco
file_put_contents("dati.json",$listJson);

header('content-type: application/json');

echo $listJson;