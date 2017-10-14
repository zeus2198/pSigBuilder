var appended = false;
var cur = -1,
    dchoice = -1,
    popid;
var tid = -1;
var trans = 0;


function state() {
    if ($("#hei").val() < 100 || $("#hei").val() > 300 || $("#wei").val() < 500 || $("#wei").val() > 800) {
        $("#htxt").slideDown();
    } else {
        $("#slid").css("position", "absolute");
        $("#slid2").css("display", "inline");
        $("#eback").css("height", $("#hei").val());
        $("#eback").css("width", $("#wei").val());
        $("#slid2").animate({
            left: 0
        }, 800, function() {
            $("#slid2").css("position", "initial");
        });

        $("#slid").animate({
                left: -1500
            },
            800,
            function() {
                $("#slid").css("display", "none");
                $("body").css("overflow-x", "visible");
            });
    }
}

function opentoolbar() {

    $("#curtxt").val(cur.html());
    $("#SelectFont").val(cur.css('font-family'));
    $("#num").val(parseInt(cur[0].style.fontSize));
    $("#toolc").slideDown();
    $("#toolc").css("display", "inline-block");
    if (cur.attr("class").split(" ")[0] == "ntxt") {
        $("#curtxt").prop('disabled', false);
        $("#curtxt").removeAttr("disabled");
    } else if (cur.attr("class").split(" ")[0] == "ibut") $("#curtxt").prop('disabled', true);
}



function finclick() {
    popid = $('#pop').bPopup({
        fadeSpeed: 'slow',
        followSpeed: 'slow',
        modalClose: false,
        opacity: 0.6,
        positionStyle: 'fixed'
    });

}

function validate(str) {
    return /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(str);
}

function isInteger(n) {
    return n % 1 === 0 && n != "" && !isNaN(n);
}


function custom_show() {
    $('#custom').dialog('option', 'title', 'Custom Background');
    dchoice = 1;
    $('#custom').dialog("open");
}

function glink() {
    if ($("#sip").val().length == 0 || $("#sport").val().length == 0) {
        $("#gerror").html("IP or port field is blank.<br><br>");
        $("#gerror").slideDown();
        return;
    }
    if (!validate($("#sip").val())) {
        $("#gerror").html("Invalid IP/hostname.<br><br>");
        $("#gerror").slideDown();
        return;
    }
    if (!isInteger($("#sport").val())) {
        $("#gerror").html("Port field should be an integer.<br><br>");
        $("#gerror").slideDown();
        return;
    }
    $("#gerror").css("color", "#00cc00");
    $("#gerror").html("Signature link: <a href='signature.php?tid=" + tid + "&srv=" + $("#sip").val() + "&port=" + $("#sport").val() + "'>Click Here</a><br><br>");
    $("#gerror").slideDown();
}

function operation() {
    $("#pop").slideUp('slow');
    $("#pop").html("<div id='popcontent'><img src='images/load.gif' style='height:100px;width:100px;display:inline-block'></img><br><span style='font-family:Gothic;font-size:15px'>Almost there</span></div>");
    $("#pop").slideDown('fast');
    $("#popcontent").disableSelection();
    var dPos = $("#eback").offset();
    var ntxtar = new Array();
    var ibutar = new Array();
    var arr = new Array();
    var img = new Array();

    $(".ntxt").each(function() {
        var pos = $(this).offset();
        var outline = $(this).css('text-shadow');
        if (outline != "none") outline = (outline.substr(0, outline.indexOf(')') + 1)).replace('rgb(', '').replace(')', '');
        var o = {
            'x': (pos.left - dPos.left),
            'y': (pos.top - dPos.top),
            'text': $(this).html(),
            'color': $(this).css('color').replace('rgb(', '').replace(')', ''),
            'size': parseInt($(this)[0].style.fontSize),
            'font': $(this).css('font-family').replace(/"/g, ''),
            'outline': outline
        };
        ntxtar.push(o);
    });

    $(".ibut").each(function() {
        var pos = $(this).offset();
        var outline = $(this).css('text-shadow');
        if (outline != "none") outline = (outline.substr(0, outline.indexOf(')') + 1)).replace('rgb(', '').replace(')', '');
        var o = {
            'x': (pos.left - dPos.left),
            'y': (pos.top - dPos.top),
            'text': $(this).html(),
            'color': $(this).css('color').replace('rgb(', '').replace(')', ''),
            'size': parseInt($(this)[0].style.fontSize),
            'font': $(this).css('font-family').replace(/"/g, ''),
            'outline': outline
        };
        ibutar.push(o);
    });

    $(".nimg").each(function() {
        var pos = $(this).offset();
        var furl = $(this).html().match(/src=\"(.*?)\"/);
        var o = {
            'x': (pos.left - dPos.left),
            'y': (pos.top - dPos.top),
            'height': parseInt($(this).css('height')),
            'width': parseInt($(this).css('width')),
            'url': furl[1]
        };
        img.push(o);
    });
    var type = trans;
    var back = 'none';
    switch (trans) {
        case 1:
            {
                back = $("#eback").css('background-color').replace('rgb(', '').replace(')', '');
                break;
            }
        case 2:
            {
                back = $("#eback").css('background-image').replace('url(\"', '').replace('\")', '');
                break;
            }
    }
    arr.push(ntxtar);
    arr.push(ibutar);
    arr.push({
        'type': type,
        'back': back
    });
    arr.push({
        'height': $("#hei").val(),
        'width': $("#wei").val()
    });
    arr.push(img);
    $.ajax({
        method: "POST",
        url: "template.php",
        data: {
            core: JSON.stringify(arr)
        }
    }).done(function(data) {
        tid = data;
        $("#pop").slideUp('slow');
        $("#pop").html("<div id='popcontent'><span style='color:green;font-family:Gothic;font-size:40px;display:inline-block;'>Done!</span><br><br><span style='font-family:Gothic;font-size:15px;'> The template for yor signature has been created! <br>Template ID : <b>"+data+"</b><br><br>You may enter your name below to generate a link to signarutre<br>"+
        "<br></span></div><input id='sname' style='font-family:Gothic;width:300px;height:30px;' type='text' placeholder='Name' /> <br><br>");
        $("#pop").slideDown('fast');
        $("#popcontent").disableSelection();
    });


}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function curupdate(str) {
    cur.html(str);
}

function closetoolbar() {
    $("#toolc").slideUp();
}

function fontcolor() {
    $("#fnc").colpick({
        layout: 'hex',
        onSubmit: function(va, va2) {
            cur.css("color", "#" + va2);
        }
    });

}

function outlinecolor() {
    $("#outline").colpick({
        layout: 'hex',
        onSubmit: function(va, va2) {
            cur.css("text-shadow", "-1px -1px 0 #" + va2 + ", 1px -1px 0 #" + va2 + ", -1px 1px 0 #" + va2 + ", 1px 1px 0 #" + va2);
        }
    });
}

function insimg() {
    $('#custom').dialog('option', 'title', 'Insert Image');
    dchoice = 0;
    $('#custom').dialog("open");
}

function InsertImage(iurl) {
    $("#eback").append("<div style=\"position:absolute;top:0;left:0;width:50pt;height:50pt;\" class = \"nimg\" ><img style=\"width:100%;height:100%;\" src = \"" + iurl + "\" /></div>");
    $(".nimg").disableSelection().draggable({
        revert: "invalid",
        containment: "#box",
        cursor: "move"
    }).click(function(event) {
        event.stopPropagation();
        if (cur != -1) {
            cur.css("border", "none");
            if (cur.attr("class").split(" ")[0] == "nimg") cur.resizable('disable');
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
        error: function() {
            if (!appended) {
                $('<p style="font-family:aller;display:none;text-align:center;color:red;line-height:2">\n\nInvalid Image link!</p>').appendTo($('#dcontent')).slideDown("slow");
                appended = true;
            }
        },
        load: function() {
            $("#custom").dialog('close');
            appended = false;
            $("#dcontent").html("Choose an option");
            dchoice ? ($("#eback").css({
                        "background-image": "url('" + url + "')",
                        "background-size": $("#wei").val() + "px " + $("#hei").val() + "px"
                    }),
                    trans = 2) :
                InsertImage(url);
        }
    });
}

function dclose() {
    $(".ui-dialog-buttonpane button:contains('Insert By URL')").button("enable");
    $(".ui-dialog-buttonpane button:contains('Upload')").button("enable");
    $(".ui-dialog-buttonpane button:contains('Cancel')").button("enable");
    $("#custom").dialog('close');
    appended = false;
    $("#dcontent").html("Choose an option");
}

function fdone(data) {
    if (data.success == true) {
        dchoice ? ($("#eback").css({
                    "background-image": "url('" + data.data.link + "')",
                    "background-size": $("#wei").val() + "px " + $("#hei").val() + "px"
                }),
                trans = 2) :
            InsertImage(data.data.link);

    } else alert("Failed to upload image.\n Status code :" + data.status + "\n Please report along with status code above.");
    dclose();
}

function prepareUpload(event) {

    if ((this.files[0].size / 1000) > 200) {
        $("#dcontent2").append("<div id='derr' style='display:none;font-family:aller;color:#ff0000;text-align:center'><br><br>Some error occured!<br>Either selected file is not a .tff file or its size is more than 200kb.</div>");
        $("#derr").slideDown();
        return;
    }
    var ext = event.target.files[0].name.split(".");
    if (ext[ext.length - 1].toLowerCase() != "ttf") {
        $("#dcontent2").append("<div id='derr' style='display:none;font-family:aller;color:#ff0000;text-align:center'><br><br>Some error occured!<br>Either selected file is not a .tff file or its size is more than 200kb.</div>");
        $("#derr").slideDown();
        return;
    }
    $("#custom2").append("<div id='derr2' style='float:center;text-align:center;display:inline;color:#ffffff;font-size:10px;font-face:Gothic;'><img src='images/load_white.gif' style='height:50px;width:50px;display:inline-block'></img><br>Uploading..</div>")
    $(".ui-dialog-buttonpane button:contains('Browse')").button("disable");
    $(".ui-dialog-buttonpane button:contains('Cancel')").button("disable");
    var data = new FormData();
    $.each(event.target.files, function(key, value) {
        data.append(key, value);
    });
    $.ajax({
        url: 'fuploader.php?files',
        type: 'POST',
        data: data,
        cache: false,
        processData: false,
        contentType: false,
        success: function(data, textStatus, jqXHR) {

            data = JSON.parse(data);
            if (typeof data.error === 'undefined') {
                var temp = data.font;
                var regex = new RegExp('(ttf)', 'gi');
                var gfile = temp.replace(regex, "ttf");
                $("head").prepend("<style type=\"text/css\">" +
                    "@font-face {\n" +
                    "\tfont-family:" + gfile.replace('.ttf', '') + ";\n" +
                    "\tsrc: url('gd_fonts/" + gfile + "');\n}" +
                    "}" +
                    "</style>");
                $("#SelectFont").append("<option value=\"" + gfile.replace('.ttf', '') + "\"  style=\"font-family:" + gfile.replace('.ttf', '') + ";\" class=\"fontselection\">" + gfile.replace('.ttf', '') + "</option>");
                alert("Font file named " + gfile + " has been uploaded.\nSee font list too look for your font.");
                $(".ui-dialog-buttonpane button:contains('Browse')").button("enable");
                $(".ui-dialog-buttonpane button:contains('Cancel')").button("enable");
                $('#custom2').dialog('close');
            } else {
                alert('Some error occured\n Error says : ' + data.error + '\n\n');
                $(".ui-dialog-buttonpane button:contains('Browse')").button("enable");
                $(".ui-dialog-buttonpane button:contains('Cancel')").button("enable");
                $('#custom2').dialog('close');
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Some error occured\n Error code : ' + textStatus + '\n\n Please inform webmaster.\n\n');
            $(".ui-dialog-buttonpane button:contains('Browse')").button("enable");
            $(".ui-dialog-buttonpane button:contains('Cancel')").button("enable");
            $('#custom2').dialog('close');
        }
    });
}

$(function() {
    $("ul, #txt, #htxt, li, .insert, .ibut, #dss, #dss2, #hh, #popcontent, .popbutton, #finbutton, #footer").disableSelection();
    $(document).tooltip();

    //----------------------------------
    //Default settings on page load:
    $("#hei").val(150);
    $("#wei").val(700);
    $("#cback").val(0);
    //----------------------------------

    $(document).keydown(function(e) {

        if(e.which == 13 && $("#sname").is(":focus"))
		{
			$("#pop").append("<div id='err' style='font-size:15px;display:none;font-family:Gothic;color:#A98436;'>Checking Validity</div>");
			$("#err").slideDown('slow');
			$.ajax({
			    url: "http://fgethell.xyz/exmAPI.php?type=basic&nick=" + $("#sname").val()
            }).done(function(data) {
			    if(data.length < 1)
			    {
				    $("#err").css("color", "#ff0000");
				    $("#err").html('No such user exists!');
			    }
			    else
			    {
				    var obj = jQuery.parseJSON(data);
				    $("#err").css("color", "#000000");
				    $("#err").html('The signature can be accessed by following link<br>'+
				    '<a href="signature.php?name='+$("#sname").val()+'&tid='+tid+'" style="text-decoration:none;color:#00cc00;font-family:Gothic;font-size:15px;font-weight:bold">http://exmserv.me/signature/signature.php?name='+$("#sname").val()+'&tid='+tid+'</a><br><br>');
			    }
		    });
        }
        
        if (e.which == 46 && cur != -1) {
            if (cur.attr("class").split(" ")[0] == "ntxt" || cur.attr("class").split(" ")[0] == "nimg") {
                cur.remove();
                cur = -1;
                closetoolbar();
            } else if (cur.attr("class").split(" ")[0] == "ibut") {
                $("#statsul").prepend("<li id=\"listitem\">" + cur.text() + "</li>");
                cur.remove();
                cur = -1;
                closetoolbar();
                $("li").draggable({
                    revert: "invalid",
                    cursor: "move",
                    containment: "#box",
                    helper: "clone"
                });
            }
        }

    });


    $('#filebrow').change(function(ev) {
        var ext = ev.target.files[0].name.split(".");
        if (ext[ext.length - 1].toLowerCase() != "png" && ext[ext.length - 1].toLowerCase() != "jpg" && ext[ext.length - 1].toLowerCase() != "jpeg") {
            $("#dcontent").append("<div id='der' style='display:none;font-family:aller;color:#ff0000;text-align:center'><br>Selected file is not a supported image type.<br>Only <b>.png / .jpg / .jpeg</b> file types are supported.</div>");
            $("#der").slideDown('slow');
            return;
        }
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
                error: function(xhr, ajaxOptions, thrownError) {
                    alert("Some error occured. Please report! \n Respone Text:" + xhr.responseText + "\n Thrown Error:" + thrownError);
                    dclose();
                },
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Authorization", "Client-ID " + clientId);
                    $(".ui-dialog-buttonpane button:contains('Insert By URL')").button("disable");
                    $(".ui-dialog-buttonpane button:contains('Upload')").button("disable");
                    $(".ui-dialog-buttonpane button:contains('Cancel')").button("disable");
                    $('#dcontent').fadeOut('slow', function() {
                        $('#dcontent').html('<img style="height:100px;width:100px" src="images/load.gif" /><br>Uploading..');
                        $('#dcontent').fadeIn('slow');
                    });
                }
            });
        };
        reader.readAsDataURL(this.files[0]);
    });


    $('#custom').dialog({
        buttons: {
            'Insert By URL': function() {
                $("#dcontent").fadeOut(400, function() {
                    $("#dcontent").css("display", "none");
                    var d = "Enter Image URL.<br> Note that Image URL must end with .png, .jpeg or jpg <br> Its recommended to use image which is of same size as signature. <br><br> <input type=\"text\" id=\"iurl\" value=\"\"><button onclick=\"urlclick(iurl.value)\">Ok</button>";
                    $("#dcontent").html(d);
                    $("#dcontent").slideDown('slow');
                });
            },
            'Upload': function() {

                $("#dcontent").fadeOut(400, function() {
                    $("#dcontent").css("display", "none");
                    var d = "Note that image is not uploaded to our site.<br>It is uploaded to imgur.com indirectly.<br><br><button onclick=\"$('#filebrow').trigger('click')\">Browse</button>";
                    $("#dcontent").html(d);
                    $("#dcontent").slideDown('slow');
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

    $('#custom2').dialog({
        buttons: {
            'Browse': function(ev) {
                ev.stopPropagation();
                $('#fontbrow').trigger('click');
            },
            'Cancel': function(ev) {
                ev.stopPropagation();
                $(this).dialog('close');
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
        revert: "invalid",
        containment: "#box",
        cursor: "move"
    });

    $(".ntxt").disableSelection().draggable({
        revert: "invalid",
        containment: "#box",
        cursor: "move"
    });

    $('#SelectFont').change(function() {
        cur.css("font-family", this.value);
        cur.css("width", "auto");
    });

    $('#num').change(function() {
        cur.css("font-size", this.value + "pt");
	});
	
	$('#cback').colpick({
		layout: 'hex',	
		showEvent: 'customE',					
		onSubmit: function(va, va2,rgb,el) {
			$(el).colpickHide();
			$("#eback").css("background", "#" + va2);
			trans = 1;						
		}
	});

    $('#cback').change(function() {
        switch (parseInt(this.value)) {
            case 0:
                {
                    $("#eback").css("background", "url('images/transparent.png')");trans = 0;
                    break;
                }
            case 1:
                {				
					$('#cback').trigger('customE');	
					
                    break;
                }
            case 2:
                custom_show();
		}
		$('#cback').val(10);

    });

    $("#statsul").droppable({
        accept: ".ibut",
        drop: function(event, ui) {
            if (cur != -1 && cur.attr("class").split(" ")[0] == "ibut") {
                closetoolbar();
                cur = -1;
            }
            var dragText = ui.draggable.text();
            var div = "<li id=\"listitem\">" + dragText + "</li>";
            $("#statsul").prepend(div);
            $("li").draggable({
                revert: "invalid",
                cursor: "move",
                containment: "#box",
                helper: "clone"
            });
            ui.draggable.remove();
            event.preventDefault();
        }
    });

    $("li").draggable({
        revert: "invalid",
        cursor: "move",
        containment: "#box",
        helper: "clone"
    });

    $("#eback").droppable({
        drop: function(event, ui) {
            if (ui.draggable.attr("id") == $("#listitem").attr("id")) {
                var dragText = ui.draggable.text();
                var pos = ui.helper.offset(),
                    dPos = $("#eback").offset();
                var div = "<div style=\"position:absolute;top:" + (pos.top - dPos.top) + ";left:" + (pos.left - dPos.left) + ";font-family:aller;font-size:15pt;color:red;\" class=\"ibut\">" + dragText + "</div>";
                $("#eback").append(div);
                $(".ibut").disableSelection().draggable({
                    revert: "invalid",
                    containment: "#box",
                    cursor: "move"
                }).click(function(event) {
                    event.stopPropagation();
                    if (cur != -1) {
                        cur.css("border", "none");
                        if (cur.attr("class").split(" ")[0] == "nimg") cur.resizable('disable');
                        cur = -1;
                    }
                    $(this).css("border", "1px black solid");
                    cur = $(this);
                    opentoolbar();
                });
                ui.draggable.remove();
                event.preventDefault();
            } else if (ui.draggable.attr("class").split(" ")[0] == "ntxt" || ui.draggable.attr("class").split(" ")[0] == "ibut") {
                var pos = ui.helper.offset(),
                    dPos = $("#eback").offset();
                ui.draggable.css({
                    "top": (pos.top - dPos.top),
                    "left": (pos.left - dPos.left),
                    "width": "auto",
                    "height": "auto"
                });
                //alert("X:"+(pos.left - dPos.left)+"   Y:"+(pos.top - dPos.top));
            }
        }
    });


    $("#newtext").click(function() {
        $("#eback").append("<div style=\"padding:0px 0px;position:absolute;top:0;left:0;font-family:aller;width:auto;height:auto;font-size:15pt;color:red;\" class=\"ntxt\">NEW TEXT</div>");
        $(".ntxt").disableSelection().draggable({
            revert: "invalid",
            containment: "#box",
            cursor: "move"
        });
        $(".ntxt").click(function(event) {
            event.stopPropagation();
            if (cur != -1) {
                cur.css("border", "none");
                if (cur.attr("class").split(" ")[0] == "nimg") cur.resizable('disable');
                cur = -1;
            }
            $(this).css("border", "1px black solid");
            cur = $(this);
            opentoolbar();
        });
    });



    $(document).click(function(event) {
        if (cur != -1 && event.target.className.indexOf('colp') == -1) {
            cur.css("border", "none");
            if (cur.attr("class").split(" ")[0] == "nimg") cur.resizable('disable');
            cur = -1;
            closetoolbar();
        }
    });

    $('#fontbrow').on('change', prepareUpload);


    $("#upload_").click(function() {
        $('#custom2').dialog("open");
        $("#derr").remove();
        $("#derr2").remove();
    });

    $("#toolc").click(function(event) {
        event.stopPropagation();
    });


});