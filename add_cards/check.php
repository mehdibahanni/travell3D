<?php
include ('../connection.php');
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $image = $_POST['image'];
    if(!empty($title)){
        echo 'image uploads';
    }
    // $title = $_POST['title'];
    // $adrr = $_POST['addr'];
    // $latitude = $_POST['Latitude'];
    // $Longitude = $_POST['Longitude'];
    // $category = $_POST['select-category'];
    // $Evaluation = $_POST['Evaluation'];

    // $sql_select = 'SELECT * FROM ta3d';

    // if (!empty($title) && !empty($adrr) && !empty($latitude) && !empty($Longitude) && !empty($category) && !empty($Evaluation)) {
        
    //     $insert_qurey = "INSERT INTO cards(image, title, adress, Latitude, Longitude, Category, Evaluation)
    //                     VALUES('$$title', '$adrr', '$latitude', '$Longitude', '$category', '$Evaluation');";
    //     if($insert_qurey){
    //         echo 'data push succsefuly to database';

    //     }else{
    //         'cannot push check database connection or try agin later';
    //     }
    // } else {
    //     echo 'cannot let this field empty';
    // }
}