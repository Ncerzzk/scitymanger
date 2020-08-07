<head>
  <title>UoP LIBRARY DATA VISUALIZATION SYSTEM</title>
  <meta http-equiv="content-type" content="text/html" charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/style.css">


</head>

<body>

  <div class="header">
    <div class="header_text">
      <a>UoP LIBRARY DATA VISUALIZATION</a>
    </div>

    <div class='headerOAAction'>
      <a href='../services/loginfunc.php?action=logout'><img src='./img/logout.png'></a>
    </div>

    <div class='headerThisAction'>

    <?php

    if(isset($_GET["indexId"])){
      echo "<a href='./index.php'><img src='./img/back.png'></a>";
    }

    ?>

    </div>
  </div>
