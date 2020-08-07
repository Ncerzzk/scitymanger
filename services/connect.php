<?php


/**
* Created by JIANFENG WU
* Connect to Database
* Date:2017.02.20
*/

  $link = mysqli_connect('localhost', 'sas', '123456', 'projectsas');
  mysqli_select_db($link, 'projectsas');
  mysqli_query($link, 'SET NAMES utf8');
  if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
  }

?>
