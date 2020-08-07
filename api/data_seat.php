

<?php

/**
* Created by JIANFENG WU
* Front page, most content create by JavaScript
* Last update: 2017.05.04
*/


  //connect to database
  include('../services/connect.php');


  //query type:select, get data from database: py


  $sql = "SELECT * FROM seat";

  $result = $link->query($sql);

  //fetch data
  if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
        $jsonArr[] = $row;
      }
  }



  //print out data

  echo stripslashes(json_encode($jsonArr, JSON_UNESCAPED_UNICODE));

?>
