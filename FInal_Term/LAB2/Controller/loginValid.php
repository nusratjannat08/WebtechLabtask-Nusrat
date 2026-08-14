<?php
session_start();
$username=$_POST ["username"];
$password=$_POST ["password"];
echo "Hi <b>$username</b>, is it your password : $password"

$hasUsernameError = true;
$hasPasswordError = true;

if(!Username){
    
if(!$username){
    $_SESSION["usernameError"] = "Username is required!";
}else{
    unset($_SESSION["usernameError"]);
    $hasUsernameError = false;
}

if(!$password){
    $_SESSION["passwordError"] = "Password is required!";
}else{
    unset($_SESSION["passwordError"]);
    $hasPasswordError = false;
}
 if($hasUsernameError || $hasPasswordError){
    Header("Location: ../View/task.php");


?>