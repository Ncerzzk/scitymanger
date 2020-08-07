<?php 
    function cleanStr($content){
        $content = str_replace(array ('"', "\\", "'", "/", "..", "../", "./", "//","<",">","|","||","*","(",")","^","!","&","&&","=" ), '', $content);
        $content = str_replace(array ("script", "*","{","}" ), '', $content);
        return $content;
    }


?>