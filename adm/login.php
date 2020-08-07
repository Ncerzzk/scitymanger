<html>
<head>
  <title>UoP LIBRARY DATA VISUALIZATION SYSTEM</title>
  <meta http-equiv="content-type" content="text/html" charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
</head>
<?php
//check if login
require_once('../checker/logincheck.php'); ?>

	<style>


		.removeBtn {
			display: none;
		}

		.login_form{
			text-align:center;
		}

		.login_form input{
			height:40px;
			border: 2px solid #58478d;
		}

		.login_form input[type='submit']{
			height:40px;
			background-color:#58478d;
			color:#fff;
		}

		.login_title{
			font-size:36px;
		}

		.login_inputbox a{
			font-size:30px;
		}
	</style>

	</head>


	<body>
		<?php
    //clear local storage
    echo '<script>localStorage.clear();</script>';?>

		<!--NAV END-->
		<h2 style="text-align:center;color:#58478d;">UoP LIBRARY DATA VISUALIZATION</h2>
		<br><br><br><br><br>
		<div class="login_form">
			<figure>

				<form action="../services/loginfunc.php" method="POST">

					<div class="a_title">
						<a>UP Number<a/><br><br><br>
					</div>

					<div class="a_inputbox">
						<a>UP<a>
						<input type="text" name="upNumber"/>
					</div>

					<br><br>

					<input type='submit' name='submit' value='login'/>
				</form>
			</figure>
		</div>

	</body>
</html>
