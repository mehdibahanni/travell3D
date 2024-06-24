<?php
    
    $host = 'localhost';
    $username = 'root';
    $password = '';
    $database_name = 'tad3';
    
    $conn = mysqli_connect($host, $username, $password, $database_name);

    if(!$conn):
        die('connection failed !: '. die($conn->error));
    endif;
?>