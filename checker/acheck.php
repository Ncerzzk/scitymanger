<head>
  <meta http-equiv="content-type" content="text/html" charset="UTF-8">
</head>


<?php
/**
* Created by JIANFENG WU
* check if login
* Date:2017.02.20
*/
 	session_start();

	if(!isset($_SESSION['upNumber'])){
		echo "<script>alert('Please Login');window.location.href='../adm/login.php'</script>";
		exit();
	}
?>
</body>
