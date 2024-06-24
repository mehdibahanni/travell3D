<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Upload Image</title>
</head>
<body>
    <form action="upload.php" method="post" enctype="multipart/form-data">
        <label for="file">Choose an image:</label>
        <input type="file" name="file" id="file" required>
        <button type="submit" name="upload">Upload</button>
    </form>
</body>
</html> 

<?php
// if (isset($_POST['upload'])) {
    // Database connection
//     $host = 'localhost';
//     $user = 'root';
//     $password = '';
//     $database = 'tad3';

//     $conn = new mysqli($host, $user, $password, $database);

//     if ($conn->connect_error) {
//         die("Connection failed: " . $conn->connect_error);
//     }

//     // Get the uploaded file
    $file = $_FILES['file']['tmp_name'];

    if(!empty($file)){
        echo 'file upload';
    }

//     // Read the file content into a variable
//     $image = addslashes(file_get_contents($file));

//     // Insert the image into the database
//     $sql = "INSERT INTO images (image) VALUES ('$image')";

//     if ($conn->query($sql) === TRUE) {
//         echo "Image uploaded successfully!";
//     } else {
//         echo "Error: " . $sql . "<br>" . $conn->error;
//     }

//     $conn->close();
// }
?>
