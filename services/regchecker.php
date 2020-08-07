
<?php
/**
* Created by JIANFENG WU
* update to database
* Last update: 2017.05.04
*/
    //start session function

    include('./connect.php');
    include('../checker/security.php');

    //新增活动开始
    if(!empty($_POST)){
        
        //vars
        $openid = $_POST['openid'];
        if($openid == "" || $openid == null || $openid == "undefined"){
            echo "1";
            exit();
        }

        //转换提交的类型
        //$upNumber = (int)$upNumber;

        //微信性别转义
        /*if($_POST['gender'] == 1){
            $gender = 0;
        }
        if($_POST['gender'] == 2){
            $gender = 1;
        }
        if($_POST['gender'] == 0){
            $gender = 3;
        }*/
        
        //检查是否已经注册
        $checkReg = "SELECT id FROM hr WHERE openid = '".$openid."'";
        $checkRegRun = mysqli_query($link, $checkReg);
        $checkRegRunRows = mysqli_fetch_array($checkRegRun);
        if($checkRegRun){
            $openidReady = $checkRegRunRows[0];
            if($openidReady == "" || $openidReady == null){
                echo "0";
                exit();
            }else{
                $sql = "SELECT upNumber,memberType,appDepart FROM hr WHERE openid = '".$openid."'";
            }
        }

        //query line
        

        //start query order in database
        $check = mysqli_query($link, $sql);
        $checkArr = mysqli_fetch_array($check);
        $memberType = membership($checkArr[1]);

        //只有会员会显示部门
        if($checkArr[1] == '3' || $checkArr[1] == '90' || $checkArr[1] == '91'){
            $memberDepart = defindDepart($checkArr[2]);
        }else{
            $memberDepart = '0';
        }
        
        $time = time();
        $FinalResult = $checkArr[0].','.$memberType.','.$memberDepart.','.$time;
        if($checkArr){
            //If success
            echo $FinalResult;
        }else{
            //If can not update
            echo mysqli_error($link);
            echo mysqli_connect_error();
            echo $sql;
            exit();
        }
    }
    //新增活动结束


    function membership($input){
        switch($input){
            case "1":
            $memberType = "CSSA会员";
            break;

            case "2":
            $memberType = "CSSA会员";
            break;

            case "3":
            $memberType = "CSSA正式成员";
            break;

            case "12":
            $memberType = "CSSA会员";
            break;

            case "90":
            $memberType = "CSSA正式成员";
            break;

            case "91":
            $memberType = "CSSA正式成员";
            break;

            case "111":
            $memberType = "CSSA会员";
            break;

          }

        return $memberType;
    }

    function defindDepart($departRep){

        switch($departRep){
            case "101":
            $departRes = "宣传部";
            break;
    
            case "102":
            $departRes = "文娱部";
            break;
    
            case "103":
            $departRes = "外联部";
            break;
    
            case "104":
            $departRes = "行政部";
            break;

            default:
            $departRes = "0";
            break;
    
          }

        return $departRes;


    }
    