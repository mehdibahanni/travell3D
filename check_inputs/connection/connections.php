<?php

$conn = mysqli_connect("localhost", "root", "", "tad3");
if (!$conn) {
    die('Error' . mysqli_connect_error());
} else {
    echo 'good';
}
// include '/Ta3D/connection/connections.php';