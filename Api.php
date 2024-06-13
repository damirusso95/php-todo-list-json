<?php

// array
$todo = [
    [
       'task' => 'Sistemare il letto',
       'fatto' => true

    ],

    [
        'task' => 'fare il bucato',
        'fatto' => false
 
    ],

    [
        'task' => 'Studiare',
        'fatto' => true
 
    ],

    [
        'task' => 'fare la spesa',
        'fatto' => false
 
    ],
    
    
    
];

header('content-type: application/json');

$jsonString = json_encode($todo);

echo $jsonString;