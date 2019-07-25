<?php 

  // php script for fetching data from mysql database
  $host = "localhost";
  $user = "root";
  $pass = "user";

  $databaseName = "functionDB";
  $tableName = "cFunctions";

  
  // Connect to mysql database
  $con = mysql_connect($host,$user,$pass);
  $dbs = mysql_select_db($databaseName, $con);

  
  // Query database for data
  
  $result = mysql_query("SELECT keyword FROM $tableName");          //query
  $array = mysql_fetch_row($result);                          //fetch result    

  
  // echo result as json 
  
  echo json_encode($array);

?>