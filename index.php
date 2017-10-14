<?php require "./settings.php"; ?>
<html>
<head>
<script src="js/jquery-1.11.2.min.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/colpick.js" type="text/javascript"></script>
<script src="js/bpop.js"></script>
<script src="js/main.js"></script>
<link rel="stylesheet" href="css/jquery-ui.css">
<link rel="stylesheet" href="css/colpick.css" type="text/css"/>
<link rel="stylesheet" href="css/main.css" type="text/css"/>
<style>
	
	<?php
	$fdir = array_diff(scandir('gd_fonts'), array('..', '.'));
	foreach($fdir as $fontfile)
	{
		$fname = explode(".", $fontfile);
		$fname = $fname[0];
		echo "@font-face 
			  {
				font-family: $fname;
				src: url('gd_fonts/$fontfile');
			  }";
	}
	?>
</style>
</head>
<body>
<div id="cont">
<!-- pop content START -->
<div id="pop">
<div id='popcontent'>
<span style="font-family:Gothic;;font-size:60px;text-align:center;display:inline-block;color:red">Are you sure?</span>
<br><br>
<span style="font-family:Gothic;font-size:15px;text-align:center;display:inline-block;color:black;">It would not be possible to edit the signature you made just now after clicking Continue</span><br><br>
<br><br>
<div class="popbutton" onclick="operation()">Continue</div>&nbsp &nbsp <div class="popbutton" onclick="popid.close()">Close</div>
<br><br><br><br>
</div>
</div>
<!-- pop content end -->

<!-- Dialog start -->
<div id="custom" title="Custom Background">
<p style="font-family:aller;text-align:center;color:white;line-height:2" id="dcontent">Choose an option</p>
</div>

<div id="custom2" title="Font Uploader">
<div style="font-family:aller;color:#ffffff;font-size:15px;text-align:left;line-height:20px;" id="dcontent2">
	<br>
	<b>Some things to know before uploading a font file :</b> <br> <br>
		&nbsp &#9679 Only <b>.ttf</b> type of font files are supported. <br>
		&nbsp &#9679 Font file size should not exceed the size of <b>200kb</b>. <br>
		&nbsp &#9679 Check the font list first to see if font of your choice <br>&nbsp is avaliable or not. <br>
</div>
<br>
</div>
<!-- Dialog end -->

<div id="dss">
Server Name
</div>
<div id="dss2">
This is the server's caption
</div>
<br></br>
<br>
<br>
<br>
<div id ="slid" style="left:0;height:auto;width:100%;">
<hr>
<div id="txt" style="font-size:60px;font-family:Gothic;color:rgba(255,255,255,0.75);">Custom Signature Builder</div><br>
<div id ="txt" style="font-size:30px;font-family:Gothic;color:rgba(255,255,255,0.75);">Select Signature Size</div>
<br>
<br>
<div  style="font-size:20px;font-family:Gothic;color:rgba(255,255,255,0.6);">
Height : <input id="hei" type="number" min="100" max="300" onkeypress="return isNumberKey(event)" />
&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
Width : <input id="wei" type="number" min="500" max="800" onkeypress="return isNumberKey(event)" />
</div>
<br><br><br>
<div id="htxt" style="display:none;font-size:15px;font-family:aller;color:rgba(255,0,0, 0.8);">
<b style="color:#ff0000">Height</b> value should be between <b style="color:#ff0000">100</b> or <b  style="color:#ff0000">300</b><br>
and <b style="color:#ff0000">width</b> value should be between <b  style="color:#ff0000">500</b> or <b  style="color:#ff0000">800</b>
<br><br></div>
<div class="popbutton" onclick="state()">Proceed</div>
<br><br><br>
</div>

<!--end of slid -->

<div id="slid2" style="display:none;height:100%;width:1000px;position:absolute;left:2000;">
<div id="box"><br>
<div id="hh">Building Area</div>
<br></br>
<span style="font-family:aller;color:white;font-size:1.2em">
Background:
<select id="cback" class="colselection">
    <option class="colselection" value="0" selected>None</option>
    <option class="colselection" value="1" id="ssh">Solid color</option>
    <option class="colselection" value="2">Custom Image</option>
</select>&nbsp || &nbsp
<div class="insert" id="newtext">Insert Text</div>&nbsp || &nbsp
<div class="insert" onclick="insimg()">Insert Image</div>
&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
<div id="finbutton" onclick="finclick()">Finalize</div>
</span>
<br>
<br>

<div id="eback">
</div>
<ul id="statsul">
	<li id="listitem">Name</li>
	<li id="listitem">Score</li>
	<li id="listitem">Money</li>
	<li id="listitem">OnlineTime</li>
	<li id="listitem">KDR</li>
	<li id="listitem">Reactions</li>
</ul>
<br><br><br>
<div id="toolc">
 Text <input id ="curtxt" type="text" size="40" onkeyup="curupdate(curtxt.value)" /> &nbsp || &nbsp
 Font <select class="fontselection" id="SelectFont">
            <option value="aller" style="font-family:aller;" class="fontselection" selected>Aller</option>
			<?php
				foreach($fdir as $fontfile)
				{
					$fname = explode(".", $fontfile);
					$fname = $fname[0];
					echo "<option value=\"$fname\"  style=\"font-family:$fname;\" class=\"fontselection\">$fname</option>";
				}
			?>
	        </select> &nbsp || &nbsp
<div class="insert" id="fnc" style="padding: 5px 5px;" onclick="fontcolor()">Color</div> &nbsp || &nbsp
 Size: <input type="number" id="num" onkeypress="return isNumberKey(event)" />
 <br><br>
 <div class="insert" style="padding: 5px 5px;" id="outline" onclick="outlinecolor()">Outline Color</div> &nbsp || &nbsp
 <div class="insert" style="padding: 5px 5px;" onclick="cur.css('text-shadow', 'none')">Remove Outline</div> &nbsp || &nbsp
 <div id="upload_" class="insert" style="padding: 5px 5px;">Upload Font</div>
</div>
<br><br><br>
</div>
</div>
</div>
<div id="footer">
Website designed and made by <a href="https://github.com/xxxZeus" target="_blank">Simran Singh</a>
</div>
<!-- font and image uploader thingy -->
<input id="filebrow" type="file" accept="image/*" style="display:none" />
<input id="fontbrow" type="file" accept=".ttf" style="display:none" />
</body>
</html>