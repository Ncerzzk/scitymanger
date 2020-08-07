<!--CREATE BY WU JIANFENG IN APRIL 11 2016-->

<head>
  <title>Login...</title>
  <meta http-equiv="content-type" content="text/html" charset="UTF-8">
</head>
<?php
/**
* Created by JIANFENG WU
* login
* Date:2017.02.20
*/

 //Start SESSION Function


 session_start();
 include('../services/connect.php');
 
 $rownum = mysqli_num_rows($sqlrun);

 if(isset($_POST["submit"]) && $_POST["submit"] == "login"){
	 $upNumber = $_POST["upNumber"];

	 if(!ereg("^[0-9a-zA-Z\_]*$",$upNumber)){
		echo " <script>alert('unknow'); history.go(-1)</script> ";
		exit();
	}

	 if($upNumber == ""){
		 echo " <script>alert('error unknow'); history.go(-1)</script> ";
	 }else{
		 //Find the username and return a number
		 include('./connect.php');
		 $sql = "SELECT psw FROM user where username = $upNumber";
		 $sqlrun = mysqli_query($link,$sql);
		 $num = mysqli_num_rows($sqlrun);

		 if($num){
			$_SESSION['upNumber'] = $upNumber;
			echo "<script>window.location.href='../adm/index.php';</script>";
		 //If user does not exist
		 }else{
			 echo"<script>alert('unknow error');history.go(-1);</script>";
		 }

	 	}
 	}

	if($_GET['action'] == "logout"){
		unset($_SESSION['upNumber']);
		session_destroy();
		//jump to login page
		echo "<script>window.location.href='../adm/login.php';</script>";
	}





?>
</html>
