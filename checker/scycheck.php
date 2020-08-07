<head>
  <title>CSSA Portsmouth 中国学联微信小程序</title>
  <meta http-equiv="content-type" content="text/html" charset="UTF-8">
</head>

<?php
/**
* Created by JIANFENG WU
* input box check
* Date:2017.02.20
*/

	if(isset($_POST['username'])){

		if (!preg_match("/^[a-zA-Z0-9]*$/",$_POST["username"])){
			echo "<script>alert('User name only accept alphabet and number.'); history.go(-1)</script>";
			exit();
		}
	}

	if(isset($_POST['password'])){

		if (!preg_match("/^[a-zA-Z0-9]*$/",$_POST["password"])){
			echo "<script>alert('Password only accept alphabet and number.'); history.go(-1)</script>";
			exit();
		}
	}

	if(isset($_POST['orpassword'])){

		if(!preg_match("/^[a-zA-Z0-9]*$/",$_POST["orpassword"])){
			echo "<script>alert('Password only accept alphabet and number.'); history.go(-1)</script>";
			exit();
		}

	}

	if(isset($_POST['newpassword'])){

		if(!preg_match("/^[a-zA-Z0-9]*$/",$_POST["newpassword"])){
			echo "<script>alert('Password only accept alphabet and number.'); history.go(-1)</script>";
			exit();
		}

	}

	if(isset($_POST['email'])){
		if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
			echo "<script>alert('Have you forgot something?'); history.go(-1)</script>";
			exit();
		}
	}
	if(isset($_POST['realname'])){

		if (!preg_match("/^[\x{4e00}-\x{9fa5}]+$/u",$_POST["realname"])){
			echo "<script>alert('Input content unsupported'); history.go(-1)</script>";
			exit();
		}
	}

	if(isset($_POST['idnum'])){
		if (!preg_match("/^[a-zA-Z0-9]{6,8}$/",$_POST["idnum"])){
			echo "<script>alert('Student number incorrect'); history.go(-1)</script>";
			exit();
		}
	}

	if(isset($_POST['address'])){

		if (!preg_match("/^[a-zA-Z0-9\s\,\.\-\，\。]*$/",$_POST["address"])){
			echo "<script>alert('Input content unsupported'); history.go(-1)</script>";
			exit();
		}

	}

	if(isset($_POST['phone'])){
		if (!preg_match("/^[0-9]*$/",$_POST["phone"])){
			echo "<script>alert('Phone number incorrect'); history.go(-1)</script>";
			exit();
		}
	}

	if(isset($_POST['invitercode'])){
		if (!preg_match("/^[\x{4e00}-\x{9fa5}]+$/u",$_POST["invitercode"])){
			echo "<script>alert('invitercode incorrect'); history.go(-1)</script>";
			exit();
		}
	}


	if(isset($_POST["mname"])){
		if (!preg_match("/^[\x{4e00}-\x{9fa5}a-zA-Z]+$/u",$_POST["mname"])){
			echo "<script>alert('Input content unsupported'); history.go(-1)</script>";
			exit();
		}
	}

	if(isset($_POST["mdes"])){
		if (!preg_match("/^[\x{4e00}-\x{9fa5}a-zA-Z0-9\s\,\.\-]+$/u",$_POST["mdes"])){
			echo "<script>alert('Input content unsupported'); history.go(-1)</script>";
			exit();
		}
	}

	if(isset($_POST["mprice"])){
		if (!preg_match("/^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/",$_POST["mprice"])){
			echo "<script>alert('Number only'); history.go(-1)</script>";
			exit();
		}
	}



?>
