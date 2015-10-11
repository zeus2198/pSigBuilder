<html>
<head>
<script src="jquery/jquery-1.11.2.min.js"></script>
<script src="jquery/jquery-ui.js"></script>
<script src="jquery/colpick.js" type="text/javascript"></script>
<script src="jquery/bpop.js"></script>
<script src="jquery/bcore.js"></script>
<link rel="stylesheet" href="css/jquery-ui.css">
<link rel="stylesheet" href="css/colpick.css" type="text/css"/>
<style>
	@font-face 
	{
    font-family: aller;
    src: url('fonts/aller.woff') format('woff');
	}
    @font-face 
	{
    font-family: air;   
	src: url('fonts/Airstream-webfont.eot'); 
    src: url('fonts/Airstream-webfont.woff') format('woff'),
         url('fonts/Airstream-webfont.ttf')  format('truetype'); 
    }
	@font-face 
	{
    font-family: jr;   
	src: url('fonts/jr.ttf')  format('truetype');
    }
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
	body 
	{
		background:url('http://i.imgur.com/rNNxbFa.jpg') #000000 no-repeat;		
		background-attachment: fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		background-size: cover;
	}	
	
	#cont
	{
	text-align: center;
	margin: 0 auto;	
	width: 910px;
    height: auto;
	visibility: visible;
	display: block
	}	
	
	
	#dss
	{
	font-weight:bold;
	opacity:0.75;
	color:#F0F0F0;
	letter-spacing:1pt;
	word-spacing:2pt;
	font-size:48px;
	text-align:center;
	font-family:air;
	line-height:1;
	}	
	#dss2
	{	
	opacity:0.50;
	color:#F0F0F0;
	letter-spacing:10px;
	word-spacing:2pt;
	font-size:20px;
	text-align:center;
	font-family:air;
	line-height:1.2;
	}	
	#footer 
	{
	font-size: 14px;
	color:#F0F0F0;
	background:#000000;
	font-family: aller;
	text-align: center;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 23px;
	visibility: visible;
	display: block
	}
	.popbutton
	{
		display:inline-block;
		height:20px;
		width:100px;
		padding:15px 10px;
		text-align:center;
		font-family:aller;
		border-radius:10px;
		border: solid #6CCB94 2px;
		color: #6CCB94;
		cursor:pointer;
		font-size: 15px;
		transition: all 0.5s ease-out;		
	}
	.popbutton:hover
	{
		color: white;
		background: #6CCB94;
	}
	#finbutton
	{
		display:inline-block;
		padding:7px 7px;
		text-align:center;
		font-family:aller;
		border-radius:10px;
		border: solid #6CCB94 2px;
		color: #6CCB94;
		cursor:pointer;
		font-size: 20px;
		transition: all 0.5s ease-out;		
	}
	#finbutton:hover
	{
		color: white;
		background: #6CCB94;
	}
	
	.button
	{   
	display: inline-block;
    height: 20px;
    width: 120px;       
    padding:10px;
    background-color: rgba(255,255,255,0.3);
    -webkit-border-radius:40px;
    -moz-border-radius:40px;
    border-radius:40px;
	border: solid #FFFFFF 1px;
	
	color: #FFFFFF;
    text-align: center;
	font-family: aller;
	letter-spacing: 2px;
	font-size: 15px;
    text-decoration: none;
    -webkit-transition: all 0.5s ease-out;  
    -moz-transition: all 0.5s ease-out;  
    -ms-transition: all 0.5s ease-out;  
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
   	
	}
	.button:hover
	{
	background-color: rgba(255,255,255,0.8);	
	}
	#hh
	{	 
	font-family: air; 
	font-size: 36px; 
	font-weight: normal; 
	color: #fff;
	text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff2d95, 0 0 30px #ff2d95, 0 0 40px #ff2d95, 0 0 50px #ff2d95, 0 0 75px #ff2d95;
	letter-spacing: 5px;
	}
	
	#eback
	{
	height:150px;
	width:700px;
	background:url('images/transparent.png');   
	display:inline-block;
	position:relative;
	}
	
	.insert
	{
	text-decoration:none;
	cursor:pointer;
	font-family:aller;
	color:black;
	border:1px solid rgba(0,0,0,0.8);	
    border-radius:10px;
	padding:7px 7px;	
	background:rgba(255,255,255,0.5);
    transition: all 0.3s ease-out;	
	display:inline-block;
	}
	.insert:hover
	{
	color:white;
	background: rgba(0,0,0,0.5);
	
	}
	
	
	#box
	{
	display:inline-block;
	height:auto;
	width:1000px;
	border:1px solid rgba(0,0,0,0.5);
	border-radius:10px 10px 2px 2px;
	-webkit-box-shadow:
		0 2px 6px rgba(0,0,0,0.5),
		inset 0 1px rgba(255,255,255,0.3),
		inset 0 10px rgba(255,255,255,0.2),
		inset 0 10px 20px rgba(255,255,255,0.25),
		inset 0 -15px 30px rgba(0,0,0,0.3);
	-moz-box-shadow:
		0 2px 6px rgba(0,0,0,0.5),
		inset 0 1px rgba(255,255,255,0.3),
		inset 0 10px rgba(255,255,255,0.2),
		inset 0 10px 20px rgba(255,255,255,0.25),
		inset 0 -15px 30px rgba(0,0,0,0.3);
	box-shadow:
		0 2px 6px rgba(0,0,0,0.5),
		inset 0 1px rgba(255,255,255,0.3),
		inset 0 10px rgba(255,255,255,0.2),
		inset 0 10px 20px rgba(255,255,255,0.25),
		inset 0 -15px 30px rgba(0,0,0,0.3);
	background: rgba(0,0,0,0.20);	
	}	
select.colselection {
   
   border: 1px solid #111;
   width: 150px;
   padding: 5px 35px 5px 5px;
   font-size: 16px;
   border: 1px solid #ccc;
   height: 34px;
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
   background: url('images/bicon.png') 96% / 15% no-repeat rgba(255,255,255,0.5);
} 
option.colselection {
background-color: #000000;
color:white;
font-family:aller;
}
select.fontselection {
   
   border: 1px solid #111;
   width: 150px;
   padding: 5px 35px 5px 5px;
   font-size: 16px;
   border: 1px solid #ccc;
   height: 34px;
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
   background: url('images/font.png') 96% / 15% no-repeat rgba(255,255,255,0.5);
} 
option.fontselection {
background-color: #000000;
color:white;
font-size:40px;
}
@media screen and (min-width:0\0) { 
    select {
        background:none;
        padding: 5px;
    }
}
.ibut {}
ul
{
    border: 1px solid #eee;
	width: 142px;
	min-height:20px;
	height:142px;
	list-style-type: none;
	margin: 0;
	overflow:hidden;
	overflow-y:scroll;
	padding: 5px 0 0 0;
	float: right;
	margin-right: 10px;
}
ul li
{
    font-family:aller;
	color:red;
	padding: 5px;
	font-size: 15pt;
	width: auto;
}


.ui-dialog .ui-dialog-buttonpane { 
    text-align: center;
}
.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset { 
    float: none;
}

.ui-widget.custom-dialog {
    font-family: aller;
    font-size: .8em;
	color: #ffffff;
}
.ui-dialog-titlebar-close {
  visibility: hidden;
}

.ui-widget-content.custom-dialog {
   background-color: #fff;
	margin: 0 auto;
	width:400px;
	padding: 30px;
	text-align: center;
	/* border-radius */
	border-radius: 12px;
	color: #ffffff solid;
	/* box-shadow */
	-webkit-box-shadow: rgba(0,0,0,0.5) 0px 3px 10px, rgba(0,0,0,.75) 0 0 70px inset;
	-moz-box-shadow: rgba(0,0,0,0.5) 0px 3px 10px, rgba(0,0,0,.75) 0 0 70px inset;
	box-shadow: rgba(0,0,0,0.5) 0px 3px 10px, rgba(0,0,0,.75) 0 0 70px inset;
	
	background: #7d7e7d;
	background: -moz-linear-gradient(top, #7d7e7d, #0e0e0e);
	background: -webkit-linear-gradient(top, #7d7e7d, #0e0e0e);
	background: -ms-linear-gradient(top, #7d7e7d, #0e0e0e);
	background: -o-linear-gradient(top, #7d7e7d, #0e0e0e);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7d7e7d', endColorstr='#0e0e0e',GradientType=0 );
	background: linear-gradient(to bottom, #7d7e7d, #0e0e0e);
	
	border-top: 1px solid #666;
	overflow: hidden;
	height:auto;
}

.ui-dialog.custom-dialog {
    left: 0;
    outline: 0 none;
    padding: 0 !important;
    position: absolute;
    top: 0;
}

.ui-dialog.custom-dialog .ui-dialog-content {
    
}

.ui-dialog.custom-dialog .ui-widget-header {
    background: rgba(0,0,0,0.8);
    bottom-border: rgba(255,255,255,0.5);
    color: #fff;   
}

.ui-dialog.custom-dialog .ui-dialog-titlebar {
   
}

#segrip
{
	width: 10px;
    height: 10px;
    background-color: #ffffff;
    border: 1px solid #000000;
}


#toolc
{
color:black;
font-family:aller;
background: #e2e2e2;
background: -moz-linear-gradient(top, #e2e2e2 0%, #dbdbdb 50%, #d1d1d1 51%, #fefefe 100%); 
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#e2e2e2), color-stop(50%,#dbdbdb), color-stop(51%,#d1d1d1), color-stop(100%,#fefefe)); 
background: -webkit-linear-gradient(top, #e2e2e2 0%,#dbdbdb 50%,#d1d1d1 51%,#fefefe 100%); 
background: -o-linear-gradient(top, #e2e2e2 0%,#dbdbdb 50%,#d1d1d1 51%,#fefefe 100%); 
background: -ms-linear-gradient(top, #e2e2e2 0%,#dbdbdb 50%,#d1d1d1 51%,#fefefe 100%); 
background: linear-gradient(to bottom, #e2e2e2 0%,#dbdbdb 50%,#d1d1d1 51%,#fefefe 100%); 
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=0 );
border-radius: 10px;
padding: 5px 10px;
width: auto;
max-width:900px;
height: auto;
display:inline-block;
display:none;
}

#pop
{
	text-align:center;
	height:auto;
	min-height:110px;
	padding:100px 100px;
	width:550px;
	border-radius:80px;	
	background: white;
	padding:10px 10px;
	box-shadow:-5px -5px 50px #ffffff,
				5px -5px 50px #ffffff,
				-5px 5px 50px #ffffff,
				5px 5px 50px #ffffff;
	display:none;
}

hr {
	width:900px;
   color: rgba(255,255,255,0.6);
}

</style>
</head>
<body>
<div id="cont">
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
<div id="custom" title="Custom Background">
<p style="font-family:aller;text-align:center;color:white;line-height:2" id="dcontent">Choose an option</p>
</div>

<div id="dss">
Pilot's Life Statistics
</div>
<div id="dss2">
Where  Flying  Is  Your  Life
</div>
<br></br>
<a href="index.html" class="button">Home</a>&nbsp &nbsp &nbsp<a href="stats.php" class="button">Chat Stats</a>&nbsp &nbsp &nbsp<a href="search.html" class="button">Search</a>
<br>
<br>
<br>
<div id ="slid" style="left:0;height:100%;width:100%;">
<hr>
<div id="txt" style="font-size:60px;font-family:Gothic;color:rgba(255,255,255,0.6);">Custom Stats Builder</div><br>
<div id ="txt" style="font-size:30px;font-family:Gothic;color:rgba(255,255,255,0.6);">Select Signature Size</div>
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
<div id="hh">Custom Stats Signature Builder</div>
<br></br>
<span style="font-family:aller;color:white;font-size:1.2em">
Background:
<select id="cback" class="colselection">
    <option class="colselection" value="0" selected>None</option>
    <option class="colselection" value="1" id="ssh">Solid color</option>
    <option class="colselection" value="2">Custom Image</option>
</select>&nbsp || &nbsp
<div class="insert" id="newtext">Insert Text</div>&nbsp || &nbsp
<div class="insert" title="Comming Soon!">Insert Image</div>
&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
<div id="finbutton" onclick="finclick()">Finalize</div>
</span>
<br>
<br>

<div id="eback">
</div>
<ul title="Stats Insertion" id="statsul"><li id="listitem">Name</li><li id="listitem">Score</li><li id="listitem">Money</li><li id="listitem">VIP</li><li id="listitem">Last Seen</li></ul>
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
 <div class="insert" style="padding: 5px 5px;" onclick="cur.css('text-shadow', 'none')">Remove Outline</div> 
</div>
<br><br><br>
</div>
</div>
</div>
<div id="footer">
Website designed and made by <a href="http://forum.sa-mp.com/member.php?u=224655" target="_blank">Zeus</a>
</div>
<input id="filebrow" type="file" accept="image/*" style="visibility:hidden" />
</body>
</html>