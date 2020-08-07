<head>
  <title>Updating</title>
  <meta http-equiv="content-type" content="text/html" charset="UTF-8">
</head>

<?php
/**
* Created by JIANFENG WU
* update to database
* Last update: 2017.05.04
*/
    //start session function
    session_start();
		include('./connect.php');


    // ********** 美食FOOD 开始 ***********
    //编辑标签 返回标签页 美食
    if(isset($_POST["editSeat"]) && $_POST["editSeat"] == "Submit"){


      //vars
      $id = $_POST['id'];
      $name = $_POST['name'];
      $px = $_POST['px'];
      $py = $_POST['py'];
      $pz = $_POST['pz'];
      $rotate = $_POST['rotate'];
      



      //query line
      $update_sql="UPDATE seat SET name = '$name', position_x='$px', position_y='$py', position_z='$pz', rotation = '$rotate' WHERE id='$id'";

      //start query order in database
      $updateSqlRun = mysqli_query($link, $update_sql);

      if($updateSqlRun){
        //If success
        echo "<script>history.go(-1);</script>";
      }else{
        $a = mysql_error();
        //If can not update
        echo "<script>alert('ERROR');history.go(-1);</script>";
      }
    }

    //新增标签 返回标签页 美食
    if(isset($_POST["addSeat"]) && $_POST["addSeat"] == "Submit"){


      //vars
      $name = $_POST['name'];
      $px = $_POST['px'];
      $py = $_POST['py'];
      $pz = $_POST['pz'];
      $rotate = $_POST['rotate'];

      if($px == null || $px == "" || $py == null || $py == "" || $pz == null || $pz == ""){
        echo "<script>alert('Empty');history.go(-1);</script>";
        exit();
      }



      //query line
      $update_sql="INSERT INTO seat (name, position_x, position_y, position_z, rotation)
                    VALUES ('$name', '$px', '$py', '$pz', '$rotate')";

      //start query order in database
      $updateSqlRun = mysqli_query($link, $update_sql);
      if($updateSqlRun){
        //If success
        echo "<script>window.location.href='../adm/index.php';</script>";
      }else{
        //If can not update
        $a = mysql_error();
        echo "<script>alert('ERROR');history.go(-1);</script>";
      }
    }

    //删除美食
    if(isset($_POST["delSeat"]) && $_POST["delSeat"] == "Delete"){

      //vars
      $id = $_POST['id'];

      //query line
      $update_sql="DELETE FROM seat WHERE id = $id";

      //start query order in database
      $updateSqlRun = mysqli_query($link, $update_sql);
      if($updateSqlRun){
        //If success
        echo "<script>alert('Delete Successful.');window.location.href='../adm/index.php';</script>";
      }else{
        //If can not update
        echo "<script>alert('ERROR');window.location.href='../adm/index.php';</script>";
      }

    }

      

?>
