<?php
include ('../connection/connection.php');
if ($_SERVER["REQUEST_METHOD"] === 'POST') {
    $username = $_POST['first_name'].' '.$_POST['last_name'];
    
    $user_name = stripcslashes(strtolower($username));
    $date = (int) $_POST["date"];

    $user_name = htmlentities(mysqli_real_escape_string($conn, $username));
    $date_valid = htmlentities(mysqli_real_escape_string($conn, $_POST['date']));

    echo $user_name;

    if (isset($_POST["gender"]) || isset($_POST["user"])):
        $gender = htmlentities($_POST["gender"]);
        if (!in_array($gender, ['female', 'mela'])) {
            $gender_error = "Choose a gender";
            $errors_nm = 1;
        };

        $user = htmlentities($_POST["user"]);
        if (!in_array($user, ['user', 'Company', 'Persne'])) {
            $user_error = "Please Chose You're Indenty";
            $errors_nm = 1;
        }
        echo $gender . "<br>";
        echo $user . "<br>";
    endif;

    $email = stripcslashes($_POST["email"]);
    $phone = $_POST["phone"];
    $password = stripcslashes($_POST["password"]);
    $confirm_password = stripcslashes($_POST["confirm-password"]);

    $email = htmlentities(mysqli_real_escape_string($conn, $_POST['email']));
    $password = htmlentities(mysqli_real_escape_string($conn, $_POST['password']));
    $confirm_password = htmlentities(mysqli_real_escape_string($conn, $_POST['confirm-password']));
    $md5_pass = md5($password);
    $md5_pass_2 = md5($confirm_password);

    if (empty($first_name)) {
        $errors_nm = 1;
        $first_nam_err = "Please Enter You're First Name";
    } elseif (filter_var($first_name)) {
        $errors_nm = 1;
        $first_nam_err = "Please Enter Valide Name";
    }
    ;
    if (empty($last_name)) {
        $errors_nm = 1;
        $last_nam_err = "Please Enter You're Last Name";
    } elseif (filter_var($last_name)) {
        $errors_nm = 1;
        $last_nam_err = "Please Enter Valide Name";
    }
    ;
    if (empty($date)) {
        $errors_nm = 1;
        $date_nam_err = "Please Enter You're date birthday";
    } elseif (filter_var($date, FILTER_VALIDATE_INT)) {
        $errors_nm = 1;
        $date_nam_err = "Please Enter Valide Date";
    }
    ;
    if (empty($email)) {
        $errors_nm = 1;
        $email_nam_err = "Please Enter Email";
    } elseif (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors_nm = 1;
        $email_nam_err = "Please Enter Valide Email";
    }
    ;
    if (empty($password)) {
        $errors_nm = 1;
        $password_nam_err = "Enter You're Password";
    }
    if (empty($confirm_password)) {
        $errors_nm = 1;
        $password_nam_err = "Enter You're Password";
    } else {
        if ($errors_nm == 0) {
            $sql = "INSERT INTO user_account(firs_name, last_name, birthday, gender, email, number, identity, password, md5_pass, confirm_pasword,md5_pass_confirm, other_identity)
        VALUES ($first_name, $last_name, $date, $gender, $email, $phone, $user, $password, $md5_pass, $confirm_password ,$md5_pass_2)";
            mysqli_query($conn, $sql);
            header('location: index.php');
        }
    }

    echo $date . "<br>";
    echo $email . "<br>";
    echo $phone . "<br>";
    echo $password . "<br>";
    echo $confrim_password . "<br>";
}