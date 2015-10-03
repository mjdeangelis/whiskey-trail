<?php

include_once 'config.php';

// Create the connection
$mysqli = new mysqli(HOST, USER, PASSWORD, DATABASE);

// Check connection
if ($mysqli ->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
} 

?>