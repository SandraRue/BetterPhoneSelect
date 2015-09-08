<?php 
if($_POST){

	$test1=$_POST['test1'];
	$test2=$_POST['test2'];
	$test3=$_POST['test3'];
	echo $test1.','.$test2.','.$test3;
}
?><!DOCTYPE html>
<html>
<head lang="en">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
<title>select_test</title>
<script src="http://cdn.bootcss.com/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="js/BetterPhoneSelect.js"></script>
<script type="text/javascript">
$(document).ready(function($){
    $(".myselect").BetterPhoneSelect({
    	FontColor:'white',//设置文字颜色
		BackgroundColor:"black",//设置背景颜色
		FontSize:"18px",//设置文字大小
		SelectedStringLength:"10",//设置选框按钮字符串的长度
    });
}); 
</script>
<style>
.sec{padding-left:30px;}
</style>
</head>
<body>
<form id="Form1" name="Form1" method="post"  action="demo.php" >  
<select class="myselect" name="test1">
	<option>分类1</option>
	<option class="sec">分类2</option>
	<option>分类3</option>
	<option>分类4</option>
	<option>分类5</option>
	<option>分类6</option>
	<option>分类2</option>
	<option>分类3</option>
	<option>分类4</option>
	<option>分类5</option>
	<option value="1">分类6||</option>
	<option>分类2</option>
	<option>分类3</option>
	<option>分类4</option>
	<option>分类5</option>
	<option>分类6</option>
	<option>分类2</option>
	<option>分类3</option>
	<option>分类4</option>
	<option>分类5</option>
	<option>分类6</option>
	<option>分类2</option>
	<option>分类3</option>
	<option>分类4分类4分类4分类4分类4分类4分类4分类4分类4分类4分类4分类4分类4分类4分类4分类4分类4分类4分类4分类4</option>
	<option>分类5分类4分类4分类4分类4</option>
	<option>分类6</option>
</select>


<select class="myselect" name="test2">
	<option>分类1</option>
	<option>分类2</option>
	<option>分类3</option>
	<option>分类4</option>
	<option>分类5</option>
	<option>分类6</option>
	<option>分类2</option>
	<option>分类3</option>
	<option>分类4</option>
	<option>分类5</option>
	<option>分类6||</option>
	<option>分类2</option>
	<option>分类3</option>
	<option>分类4</option>
	<option>分类5</option>
	<option>分类6</option>
	<option>分类2</option>
	<option>分类3</option>
	<option>分类4</option>
	<option>分类5</option>
	<option>分类6</option>
	<option>分类2</option>
	<option>分类3</option>
	<option>分类4分类4分类4分类4分类4</option>
	<option>分类5分类4分类4分类4分类4</option>
	<option>分类6</option>
</select>
<select class="myselect" name="test3">
	<option>分类1</option>
	<option>分类2</option>
	<option>分类3</option>
</select>
<input type="submit" value="提交">
</form>
</body>
</html>