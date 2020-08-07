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

	if(isset($_SESSION['upNumber'])){
		echo "<script>alert('已经登陆，请不要重复操作');window.location.href='./index.php'</script>";
		exit();
	}
?>
</body>
