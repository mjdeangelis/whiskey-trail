<?php

include 'db_connect.php';

	$user = json_decode(file_get_contents('php://input')); //get user from json headers

	$username = $user->username;
	$password = $user->password;

	$stmt= "SELECT  userID, username
	 		FROM   whiskey_trail.users
			WHERE username = '" . $username . "' AND password = '" . $password . "'";

	$result = $mysqli->query($stmt);

        if ($result->num_rows > 0) {
	    	session_start();
			$_SESSION['uid'] = uniqid('ang_');
			print $_SESSION['uid'];
	    }

	$mysqli->close();

?>