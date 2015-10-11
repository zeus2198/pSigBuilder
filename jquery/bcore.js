/*
  * Author: Zeus aka BroZues ( http://forum.sa-mp.com/member.php?u=224655 )
*/

var appended = false;
var cur = -1, dchoice = -1, popid;
var tid = -1;
var trans = 0;

function state()
{
	if($("#hei").val() < 100 || $("#hei").val() > 300 || $("#wei").val() < 500 || $("#wei").val() > 800)
	{
		$("#htxt").slideDown();
	}
	else
	{
	$("#slid").css("position", "absolute");	
	$("#slid2").css("display", "inline");
	$("#eback").css("height", $("#hei").val());
	$("#eback").css("width", $("#wei").val());	
	$("#slid2").animate({left: 0},800, function(){
		$("#slid2").css("position", "initial");
	});
	
	$( "#slid" ).animate({left: -1500},
	800, function() {
		$( "#slid" ).css("display", "none");
	});
	}
}

function opentoolbar()
{
	
	$("#curtxt").val(cur.html());
	$("#SelectFont").val(cur.css('font-family'));
	$("#num").val(parseInt(cur[0].style.fontSize));	
	$("#toolc").slideDown();
	$("#toolc").css("display", "inline-block");
	if(cur.attr("class").split(" ")[0] == "ntxt")$("#curtxt").prop('disabled', false);
	else if(cur.attr("class").split(" ")[0] == "ibut")$("#curtxt").prop('disabled', true);
}



function finclick()
{
	popid = $('#pop').bPopup({
		fadeSpeed: 'slow', 
        followSpeed: 'slow',
		modalClose: false,
        opacity: 0.6,
        positionStyle: 'fixed'
	});
	
}

function operation()
{
	$("#pop").slideUp('slow');
	$("#pop").html("<div id='popcontent'><img src='images/load.gif' style='height:100px;width:100px;display:inline-block'></img><br><span style='font-family:Gothic;font-size:15px'>Almost there</span></div>");
	$("#pop").slideDown('fast');
	$("#popcontent").disableSelection();
	var dPos = $("#eback").offset();
	var ntxtar = new Array();
	var ibutar = new Array();
	var arr = new Array();
	//var img = new Array();
	
	$(".ntxt").each(function() {
		var pos = $(this).offset();	
		var outline = $(this).css('text-shadow');
		if(outline != "none")outline = (outline.substr(0, outline.indexOf(')')+1)).replace('rgb(', '').replace(')','');
		var o = { 'x': (pos.left - dPos.left), 'y': (pos.top - dPos.top), 'text': $(this).html(), 'color': $(this).css('color').replace('rgb(', '').replace(')',''),
				  'size': parseInt($(this)[0].style.fontSize), 'font': $(this).css('font-family'), 'outline': outline	};
		ntxtar.push(o);
	});
	
	$(".ibut").each(function() {
		var pos = $(this).offset();	
		var outline = $(this).css('text-shadow');
		if(outline != "none")outline = (outline.substr(0, outline.indexOf(')')+1)).replace('rgb(', '').replace(')','');
		var o = { 'x': (pos.left - dPos.left), 'y': (pos.top - dPos.top), 'text': $(this).html(), 'color': $(this).css('color').replace('rgb(', '').replace(')',''),
				  'size': parseInt($(this)[0].style.fontSize), 'font': $(this).css('font-family'), 'outline': outline	};
		ibutar.push(o);
	});
	
	/*$(".nimg").each(function() {
		var pos = $(this).offset();	
		alert("Height:"+(parseInt($(this)[0].style.height) * 72 / 96));
		var o = { 'x': (pos.left - dPos.left), 'y': (pos.top - dPos.top), 'height': $(this).css('height'), 'color': rgb2hex($(this).css('color')),
				  'size': parseInt($(this)[0].style.fontSize), 'font': $(this).css('font-family'), 'outline': outline	};
		img.push(o);
	});*/
	var type = trans;
	var back = 'none';
	switch(trans)
	{
		case 1: { back = $("#eback").css('background-color').replace('rgb(', '').replace(')',''); break;}
		case 2: { back = $("#eback").css('background-image').replace('url(\"','').replace('\")',''); break;}
	}
	arr.push(ntxtar);
	arr.push(ibutar);
	arr.push({'type':type, 'back':back});
	arr.push({'height':$("#hei").val(), 'width':$("#wei").val()});
	$.ajax({
		    method: "POST",
			url: "template.php",
           data: { core: JSON.stringify(arr) }
        }).done(function(data) {
			tid = data;
			$("#pop").slideUp('slow');
			$("#pop").html("<div id='popcontent'><span style='color:green;font-family:Gothic;font-size:40px;display:inline-block;'>Done!</span><br><br><span style='font-family:Gothic;font-size:15px;'> The template for yor signature has been created! <br>Template ID : <b>"+data+"</b><br><br>You may enter your name below to generate a link to signarutre<br>"+
			"<br></span></div><input id='sname' style='font-family:Gothic;width:300px;height:30px;' type='text' placeholder='Name' /> <br><br>");
			$("#pop").slideDown('fast');
			$("#popcontent").disableSelection();
		});


}

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
} 

function curupdate(str)
{
	cur.html(str);
}

function closetoolbar()
{
	$("#toolc").slideUp();
}

function fontcolor()
{
	$("#fnc").colpick({
			layout:'hex',
			onSubmit: function(va, va2){cur.css("color", "#"+va2);}
			});
			
}

function outlinecolor()
{
	$("#outline").colpick({
			layout:'hex',
			onSubmit: function(va, va2){
						cur.css("text-shadow", "-1px -1px 0 #"+va2+", 1px -1px 0 #"+va2+", -1px 1px 0 #"+va2+", 1px 1px 0 #"+va2);
			}
			});
}

function insimg()
{
	$('#custom').dialog('option', 'title', '  Insert Image');
	dchoice = 0;
	$('#custom').dialog( "open" );
}

function InsertImage(iurl)
{
	$("#eback").append("<div style=\"position:absolute;top:0;left:0;width:50pt;height:50pt;\" class = \"nimg\" ><img style=\"width:100%;height:100%;\" src = \""+iurl+"\" /></div>");
	$(".nimg").disableSelection().draggable({
	revert:"invalid",
	containment:"#box",
	cursor:"move"}).click(function(event) {
	event.stopPropagation();
	if(cur != -1)
	{
		cur.css("border", "none");
		if(cur.attr("class").split(" ")[0] == "nimg")cur.resizable('disable');
		closetoolbar();
	}
	$(this).css("border", "1px black solid");
	cur = $(this);
	cur.resizable({
		containment: '#eback',
		handles: "n, e, s, w, ne, nw, se, sw"
	});
	cur.resizable('enable');
	
});
}

function urlclick(url) {
$("<img>", {
    src: url,
    error: function() { if(!appended){$('<p style="font-family:aller;display:none;text-align:center;color:red;line-height:2">\n\nInvalid Image link!</p>').appendTo($('#dcontent')).slideDown("slow"); appended = true;} },
    load: function() {  $("#custom").dialog('close');
	                    appended = false;
						$("#dcontent").html("Choose an option");
						dchoice ? ($("#eback").css({
							"background-image": "url('"+url+"')",
							"background-size": $("#wei").val()+"px "+$("#hei").val()+"px"}),
						trans = 2)
                                : InsertImage(url);                             
					 }
});
}
function dclose()
{
     $(".ui-dialog-buttonpane button:contains('Insert By URL')").button("enable");
	 $(".ui-dialog-buttonpane button:contains('Upload')").button("enable");
	 $(".ui-dialog-buttonpane button:contains('Cancel')").button("enable");
	 $("#custom").dialog('close');
	 appended = false;
	 $("#dcontent").html("Choose an option");	
}

function fdone(data) {    
     if(data.success == true)
	 {
		dchoice ? ($("#eback").css({
							"background-image": "url('"+data.data.link+"')",
							"background-size": $("#wei").val()+"px "+$("#hei").val()+"px"}),
					trans = 2)
				: InsertImage(data.data.link);	
		
	 }
     else alert("Failed to upload image.\n Status code :" + data.status +"\n Please report along with status code above.");	 
     dclose();
}


$(function() {
$( "ul, #txt, #htxt, li, .insert, .ibut, #dss, #dss2, #hh, #popcontent, .popbutton, #finbutton" ).disableSelection();
$( document ).tooltip();
$("#hei").val(150);
$("#wei").val(700);
$(document).keydown(function(e) {
		if(e.which == 13 && $("#sname").is(":focus"))
		{
			$("#pop").append("<div id='err' style='font-size:15px;display:none;font-family:Gothic;color:#A98436;'>Checking Validity</div>");
			$("#err").slideDown('slow');
			$.ajax({
			url: "https://thepilotslife.com/api/"+$("#sname").val()
        }).done(function(data) {
			if(data.substr(0,9) == "API Error")
			{
				$("#err").css("color", "#ff0000");
				$("#err").html('No such user exists!');
			}
			else
			{
				var obj = jQuery.parseJSON(data);
				$("#err").css("color", "#000000");
				$("#err").html('The signature can be accessed by following link<br>'+
				'<a href="signature.php?uid='+obj.User_ID+'&tid='+tid+'" style="text-decoration:none;color:#00cc00;font-family:Gothic;font-size:15px;font-weight:bold">http://brozeus.tk.plwip.tk/signature.php?uid='+obj.User_ID+'&tid='+tid+'</a><br><br>');
			}
		});
		}
        if(e.which == 46 && cur != -1)
		{
			if(cur.attr("class").split(" ")[0] == "ntxt" || cur.attr("class").split(" ")[0] == "nimg")
			{
				cur.remove();
				cur = -1;
				closetoolbar();
			}
			else if(cur.attr("class").split(" ")[0] == "ibut")
			{				
				$("#statsul").prepend("<li id=\"listitem\">"+cur.text()+"</li>");
				cur.remove();
				cur = -1;
				closetoolbar();
				$( "li" ).draggable({
					revert:"invalid",
					cursor:"move",
					containment:"#box",
					helper:"clone"
				});
			}
		}
   
});


$('#filebrow').change(function() {
   var reader = new FileReader();
   reader.onload = function(e) {
   var data = e.target.result.substr(e.target.result.indexOf(",") + 1, e.target.result.length);
   var clientId = "aa7ad07cb0bb7f0";               
    $.ajax({
    url: "https://api.imgur.com/3/upload",
    type: "POST",
    datatype: "json",
    data: {
	'image': data,
    'type': 'base64'
	},
    success: fdone,
    error: function(xhr, ajaxOptions, thrownError){alert("Some error occured. Please report! \n Respone Text:" + xhr.responseText + "\n Thrown Error:" + thrownError); dclose(); },
    beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Client-ID " + clientId);
		$(".ui-dialog-buttonpane button:contains('Insert By URL')").button("disable");
		$(".ui-dialog-buttonpane button:contains('Upload')").button("disable");
		$(".ui-dialog-buttonpane button:contains('Cancel')").button("disable");
		$('#dcontent').fadeOut('slow', function() {
        $('#dcontent').html('<img style="height:100px;width:100px" src="images/load.gif" /><br>Uploading..');
        $('#dcontent').fadeIn('slow'); });
    }
});
};
 reader.readAsDataURL(this.files[0]);
});


$('#custom').dialog({
	buttons: {
    'Insert By URL': function() {
       $( "#dcontent" ).fadeOut(400, function() {
       $( "#dcontent" ).css("display", "none");
	   var d = "Enter Image URL.<br> Note that Image URL must end with .png, .jpeg or jpg <br> Its recommended to use image of size 750px X 150px <br><br> <input type=\"text\" id=\"iurl\" value=\"\"><button onclick=\"urlclick(iurl.value)\">Ok</button>";
	   $( "#dcontent" ).html(d);
	   $( "#dcontent" ).slideDown('slow');
    });   
    },
	'Upload': function() {
       	
       $( "#dcontent" ).fadeOut(400, function() {
			$( "#dcontent" ).css("display", "none");
			var d = "Note that image is not uploaded to our site.<br>It is uploaded to imgur.com indirectly.<br><br><button onclick=\"$('#filebrow').trigger('click')\">Browse</button>";
			$( "#dcontent" ).html(d);
			$( "#dcontent" ).slideDown('slow');
		}); 
    },
    'Cancel': function() {
       $(this).dialog('close');
	   appended = false;
	   $("#dcontent").html("Choose an option");
    }
	},
	 show: {
        effect: 'fade',
        duration: 400
    },
    hide: {
        effect: 'fade',
        duration: 400
    },
	autoOpen: false,	
	modal: true,
	width: 450,
	resizable: false,
	dialogClass: 'no-close custom-dialog'
});

$(".ibut").draggable({
	revert:"invalid",
	containment:"#box",
	cursor:"move"});
	
$(".ntxt").disableSelection().draggable({
	revert:"invalid",
	containment:"#box",
	cursor:"move"
	});
	
$('#SelectFont').change( function() {
	cur.css("font-family", this.value);
	cur.css("width", "auto");
});

$('#num').change( function() {
	cur.css("font-size", this.value+"pt");
});
	
$('#cback').change( function() {
   switch(parseInt(this.value))
   {
		case 0:{ $("#eback").css("background", "url('images/transparent.png')");trans = 0;break;}
		case 1:
		{		
		$('#ssh').colpick({
	    layout:'hex',
		onSubmit: function(va, va2){$("#eback").css("background", "#"+va2);trans = 1;}
		});
		break;
		}
		case 2:
		{
		$('#custom').dialog('option', 'title', 'Custom Background');
		dchoice = 1;
		$('#custom').dialog( "open" );
		break;
		}
   }
   
   });
   
$( "#statsul" ).droppable({
accept: ".ibut",
drop: function( event, ui ) 
	{
	if(cur != -1 && cur.attr("class").split(" ")[0] == "ibut")
	{
		closetoolbar();
		cur = -1;
	}
	var dragText = ui.draggable.text();
	var div = "<li id=\"listitem\">"+dragText+"</li>";
	$("#statsul").prepend(div);
	$( "li" ).draggable({
		revert:"invalid",
		cursor:"move",
		containment:"#box",
		helper:"clone"
		});
	ui.draggable.remove();        
    event.preventDefault();
	}
});

$( "li" ).draggable({
revert:"invalid",
cursor:"move",
containment:"#box",
helper:"clone"
});

$( "#eback" ).droppable({
 drop: function( event, ui ) 
	{
	if(ui.draggable.attr("id") == $("#listitem").attr("id"))
	{ 
	var dragText = ui.draggable.text();
    var pos = ui.helper.offset(), dPos = $("#eback").offset();    	
	var div = "<div style=\"position:absolute;top:"+(pos.top - dPos.top)+";left:"+(pos.left - dPos.left)+";font-family:aller;font-size:15pt;color:red;\" class=\"ibut\">"+dragText+"</div>";
	$("#eback").append(div);
	$(".ibut").disableSelection().draggable({
	revert:"invalid",
	containment:"#box",
	cursor:"move"
	}).click(function(event){
		event.stopPropagation();
		if(cur != -1)
		{
			cur.css("border", "none");
			if(cur.attr("class").split(" ")[0] == "nimg")cur.resizable('disable');
			cur = -1;
		}
		$(this).css("border", "1px black solid");
		cur = $(this);
		opentoolbar();		
	});
    ui.draggable.remove();        
    event.preventDefault();
	}	
	else if(ui.draggable.attr("class").split(" ")[0] == "ntxt" || ui.draggable.attr("class").split(" ")[0] == "ibut")
	{
		var pos = ui.helper.offset(), dPos = $("#eback").offset();
		ui.draggable.css({
		"top" : (pos.top - dPos.top),
		"left" : (pos.left - dPos.left),
		"width" : "auto",
		"height" : "auto"
		});
		//alert("X:"+(pos.left - dPos.left)+"   Y:"+(pos.top - dPos.top));
	}
	}
});


$("#newtext").click(function(){    
	$("#eback").append("<div style=\"padding:0px 0px;position:absolute;top:0;left:0;font-family:aller;width:auto;height:auto;font-size:15pt;color:red;\" class=\"ntxt\">NEW TEXT</div>");
	$(".ntxt").disableSelection().draggable({
	revert:"invalid",
	containment:"#box",
	cursor:"move"});
	$(".ntxt").click(function(event) {
	event.stopPropagation();
	if(cur != -1)
	{
		cur.css("border", "none");
		if(cur.attr("class").split(" ")[0] == "nimg")cur.resizable('disable');
		cur = -1;
	}
	$(this).css("border", "1px black solid");
	cur = $(this);
	opentoolbar();
});
});



$(document).click(function(event) {
	if(cur != -1)
	{
		cur.css("border", "none");
		if(cur.attr("class").split(" ")[0] == "nimg")cur.resizable('disable');
		cur = -1;
		closetoolbar();
	}
});

$("#toolc").click(function(event) {		event.stopPropagation();	});


});