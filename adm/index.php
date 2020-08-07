<?php include('../checker/acheck.php'); ?>
<?php include('header.php'); ?>


<link rel="stylesheet" href="./css/index.css">




	<div class="columns_form">
			


      <h1>Seat List</h1>
			<figure>
      

              <?php

              //connect to database
              include('../services/connect.php');
              $sql = "SELECT * FROM seat";
              $sqlrun = mysqli_query($link,$sql);
              $rownum = mysqli_num_rows($sqlrun);

              //html generator
              while ($row = mysqli_fetch_array($sqlrun)){
                echo "<form action='../services/updatefunc.php' method='post' enctype='multipart/form-data'>";
                  echo "<div class='index'>";
                  echo "<div class='indexName' data-id='".$row[0]."' id='indexName'>";
                  echo "<div class='indexContainer' id='indexContainer' style='display:block;'><a>".$row[1]."</a></div>";
                  echo "<div class='indexInput' id='indexInput' style='display:none;'>";
                  echo "<input type='hidden' name='id' value='".$row[0]."' /><br><br>";
                  echo "<div>Name：</div><br><br>";
                  echo "<input type='text' name='name' value='".$row[1]."'/><br><br>";
                  echo "<div>Position X：</div><br><br>";
                  echo "<input type='text' name='px' value='".$row[2]."'/><br><br>";
                  echo "<div>Position Y：</div><br><br>";
                  echo "<input type='text' name='py' value='".$row[3]."' /><br><br>";
                  echo "<div>Position Z：</div><br><br>";
                  echo "<input type='text' name='pz' value='".$row[4]."' /><br><br>";
                  echo "<div>Rotation：</div><br><br>";
                  echo "<input type='text' name='rotate' value='".$row[5]."' /><br><br>";
									echo "<input type='submit' name='editSeat' value='Submit' /><br><br>";
                  echo "<input type='submit' name='edlSeat' value='Delete' />";
                  echo "</div></div><div class='indexNameEdit' id='indexNameEdit'><img src='./img/edit.png'></div></div>";

                echo "</form>";
              }
              ?>

              <div class='indexName indexNameAdd' id='foodNameAdd'>
                <a>+</a>
              </div>

              <div class='indexNameAddBlock' id='foodNameAddBlock' style='display:none;'>
                <form action='../services/updatefunc.php' method='post' enctype='multipart/form-data'>

                  <div>Name:</div><br><br>
                  <input type='text' name='name' value=''/><br><br>
									<div>Position X:</div><br><br>
                  <input type='text' name='px' value=''/><br><br>
                  <div>Position Y:</div><br><br>
                  <input type='text' name='py' value='39.352' /><br><br>
									<div>Position Z:</div><br><br>
                  <input type='text' name='pz' value='-' /><br><br>
                  <div>Roataion:</div><br><br>
                  <input type='text' name='rotate' value='0' /><br><br>
                  



                  <input type='submit' name='addSeat' value='Submit' />

                </form>
              </div>
			</figure>





		</div>
    <script src='./js/main.js'></script>
</body>
