//'use strict';
var glob_root = null;
var glob_path = [];
var glob_projobj = null;
var glob_level = "";
var glob_datasource = "";
var glob_codename = "";
var glob_log = [];
var default_list_json = '{"$type":"node", "$template":"{\\"item\\":\\"\\"}", "$sort":"function(a,b){return a > b;}", "$hidebuttons":0, "value":{}, "$max_id": 0}';
var default_proj_json = '{"list1":' + default_list_json + '}'
var glob_objlabellength = 15;

//Page Setup 
function load() {
	glob_codename = (getUrlParameter("codename") || localStorage.getItem("codename")) || "";
	localStorage.setItem("codename", glob_codename);
	glob_datasource  = (getUrlParameter("datasource") || localStorage.getItem("datasource")) || "server";
	localStorage.setItem("datasource", glob_datasource);
	
	if (glob_datasource === "local") {
		glob_datasource = 'local';
		localStorage.setItem("projobj", glob_codename || default_proj_json);
		setup();
	} else if (glob_datasource === "server"){
		glob_datasource = 'server';
		$.ajax({
			url: "../JsonFiles/proj_data_" + glob_codename + ".json"
			,cache: false
			,type: "get"
			,datatype: "json"
			,contentType: "application/json; charset=ISO-8859-1"
			,error: function() {
				localStorage.setItem("projobj", default_proj_json);
				setup();
			}
			,success: function(in_data) {
				localStorage.setItem("projobj", JSON.stringify(in_data));
				setup();
			}	
		});
	} else if (glob_datasource === "myjson") {
		glob_datasource = 'myjson';
		localStorage.setItem("projobj", glob_codename || default_proj_json);
		$.get("https://api.myjson.com/bins/" + glob_codename, function(in_data, textStatus, jqXHR) {
			localStorage.setItem("projobj", JSON.stringify(in_data));
			setup();
		});
	};
	if (glob_datasource === 'server'){
		$.post( "proj_visitor.aspx", {codename: "" + glob_codename + "", data: "visitor log"}, function( result ){;});
		$.post( "proj_logger.aspx", {data: "{'codename':'" + glob_codename + "','time':'" + Date() + "','action':'(Re)Loaded-Page'}" }, function( result ) {;});	
	};
	$("#newcodenamebutton").hide();
};
function setup(){
	glob_projobj = glob_root = JSON.parse(localStorage.getItem("projobj"));
	glob_level = getUrlParameter("inLevel") || "";
	addbuttons();
    if (typeof glob_projobj["-autorun"] !== 'undefined') { 	//run the autorun functions
		var runners = glob_projobj["-autorun"]["value"] || glob_projobj["-autorun"]["data"];
		for (var key in runners){
			if (runners.hasOwnProperty(key)) {
				try {
					eval(runners[key]["-function"]);
				} catch (e) {
						$("#alert").html(e.message + $("#alert").html());
				}
			};
		}
	};
	refresh(glob_level); 	//refresh
	$("#listinputbutton").bind('click', setcodename);
	$(window).resize(function() { return false; }); //needed to cancel resizing when the soft keyboard disappears, as happens when a textarea is exited. This resizing will interfere with button presses.
	hidemore();
	
	// define a handler
	function doc_keyUp(e) {
		// this would test for whichever key is 40 and the ctrl key at the same time
		if (e.ctrlKey && e.keyCode == 83) {
			var $focused = $(':focus');
			if ($focused.prop("tagName") === "TEXTAREA"){
				$focused.blur(); //to record changes to the text area first before changing
			};
			// call your function to do the thing
			save();
		}
	}
	// register the handler 
	document.addEventListener('keyup', doc_keyUp, false);
};
function refresh(inLevel){
	var sortfun;
	var dataobj;
	var listitems;
	
	if (glob_projobj[inLevel] && glob_projobj[inLevel]["$type"] &&  glob_projobj[inLevel]["$type"] === "link"){
		window.location.href = glob_projobj[inLevel]["value"];
	}
	
	$(".taskdiv").remove();
	if (!inLevel){ for (var property in glob_projobj) { if (glob_projobj.hasOwnProperty(property)) {
		inLevel = property;
		break;
	}}};	
	var blnNewLevel = inLevel !== glob_level;
	glob_level = inLevel;
	var dataobj = followJG(glob_projobj, glob_level);
	var listitems = [];
	if (typeof dataobj === 'object'){
		$("#valuespan").hide();
		for (var listitem in dataobj) {
			if (typeof dataobj[listitem] === 'object'){
				listitems.push(dataobj[listitem]);
			} else {
				var proxyitem = {id:'proxy'};
				proxyitem[listitem] = dataobj[listitem];
				listitems.push(proxyitem);				
			};
		};
	} else {
		$("#valuespan").show();
		$("#valueinput").val(dataobj);		
	};
	try {
		eval("sortfun = " + glob_projobj[glob_level]["$sort"]);
	} catch (e) {
		$("#alert").html(e.message + $("#alert").html());
	};
	listitems.sort( sortfun || function(a, b){return a - b} );
	listitems.forEach(function(a){
		add(a);
	});
	$(".showspan").each(function(){showfields(this);});
	if(blnNewLevel){
		$("#alert").html(JSON.stringify(glob_path) + "." + glob_level + ". " + $("#alert").html());
		$("#alert").html(listitems.length + " Items. " + $("#alert").html());
	};
	if (glob_codename) { $("#listinputspan").hide(); } else { $("#listinputspan").show(); };
	heightchange();
	$(window).resize(heightchange);

};
//List Level Functions
function add(inItem){
	var newdiv = document.createElement("div");
	var _x;
	newdiv.className = "taskdiv";
	var newobj = inItem || eval('var _x = ' + glob_projobj[glob_level]["$template"] + '; _x') || glob_projobj[glob_level]["template"] //TODO need a more general fix if there is no template
	var _x = undefined;
	var proj = glob_projobj["projects"] ? glob_projobj["projects"]["value"] || glob_projobj["projects"]["data"] : glob_projobj["-projects"] ? glob_projobj["-projects"]["value"] || glob_projobj["-projects"]["data"] : {};
	var projitems = [];
	for (var listitem in proj) projitems.push(proj[listitem])
	var newHTML = "";
	if (typeof inItem === 'undefined'){
		glob_projobj[glob_level]["$max_id"] = (glob_projobj[glob_level]["$max_id"] ? "" + (1 + parseInt(glob_projobj[glob_level]["$max_id"])) : "" + 1)
		var newid = glob_projobj[glob_level]["$max_id"]
		newobj["id"] = newid;
		if (typeof glob_projobj[glob_level]["data"] !== 'undefined') {
			glob_projobj[glob_level]["data"][newid] = newobj;
		} else {
			glob_projobj[glob_level]["value"][newid] = newobj;			
		};
	}
	for (var key in newobj) {
		if (newobj.hasOwnProperty(key)) {
			if ((glob_level === "tasks" || glob_level === "goals") && key === "projectname") {
				newHTML += 	key + ":<br/><select class='" + key + "_input'>";
				for (var projkey in projitems) {
					if (projitems.hasOwnProperty(projkey)) {
						newHTML += "<option value='" + projitems[projkey]["projectname"] + "' " + (projitems[projkey]["projectname"] === newobj[key] ? "selected = 'selected' " : "") + ">" 
							+ projitems[projkey]["projectname"] 
							+ "</option>"
					}
				}
				newHTML += "</select>";
			} else if (typeof newobj[key] === "object") {
				newHTML += 	"<span class='" + key + "_label'><br/>" + key + ":<br/></span>";
				var objstring = JSON.stringify(newobj[key]);
				var newpath = glob_path.slice(0);
				newpath.push(glob_level);
				newpath.push("value");
				newpath.push(newobj['id']);
				newpath.push(key);
				newHTML += "<input type='button' onclick='move_to(this)' value='object: "
					+ objstring.substring(0, glob_objlabellength - 1) + (objstring.length > glob_objlabellength ? "..." : "")
					+ "' data-path='" + JSON.stringify(newpath) + "'/><br/>";
			} else {
				newHTML += 	"<span class='" + key + "_label'><br/>" + key + ":<br/></span>";
				newHTML += "<textarea " + (key === 'id' ? "readonly ": "") + "rows='" + (newobj[key] ? Math.min(10, (Math.floor(newobj[key].toString().length/24) + 1)) : 1) + "' class='" + key + "_input'>" 
					+ newobj[key] 
					+ "</textarea>";
				if (key === "link") newHTML += "<br/><br/><a href='" + newobj[key] + "'>follow</a><br/>";
				if (key === "function" || key === "-function") newHTML += "<br/><br/><input type='button' value='run' onclick='runfunction(this)'/>";
			};
		};
	};
	newHTML += 	'<br/>';
	if (!eval(glob_projobj[glob_level]["$hidebuttons"])){
		newHTML += 	'<input class="removebutton" type="button" value="delete" onclick="removeItem(this)"/>' +
			'<input class="completebutton" type="button" value="complete" onclick="closeItem(this)"/>' +
			'<input type="button" value="show" class="showbutton" onclick="showfields(this)"/>';
	};
	newHTML += '<span class="showspan"/>';
	newdiv.innerHTML = newHTML;
	$("#itemsdiv").prepend(newdiv);
	$(newdiv).children("textarea").blur(updatefield);
	$(newdiv).children("select").blur(updatefield);
	if (typeof inItem === 'undefined' && glob_datasource === 'server') $.post( "proj_logger.aspx", {data: "{'codename':'" + glob_codename + "','time':'" + Date() + "','action':'Added Item " + glob_level + " " + newobj["id"] + "'}"}, function( result ) {;});
	document.getElementById('itemsdiv').scrollTop = 0;
};
function heightchange(){
	newheight = window.innerHeight || parseInt($(window).outerHeight());
	$('#itemsdiv').height(
		parseInt(newheight  - $('#controldiv').outerHeight())
	);
}
function togglemore(){
	$("#morespan").toggle();
	$(".minorbutton").toggle();
	$("#morebutton").val($("#morebutton").val() === "more" ? "less" : "more");
	heightchange();
};
function hidemore(){
	$("#morespan").hide();
	$(".minorbutton").hide();
	$("#morebutton").val("more");
	heightchange();
};
function showsaveto(){
	setinput("Save To", glob_codename, saveto	);
};
function saveto(){
	localStorage.setItem("datasource", $("#dsinput").val());
	glob_datasource = $("#dsinput").val();
	localStorage.setItem("codename", $("#listinput").val());
	glob_codename = $("#listinput").val();
	save();
};
function save(){
	localStorage.setItem("projobj", JSON.stringify(glob_root));
	if (glob_datasource === 'server'){
		//if the codename begins with '%' save locally in the browser
		$.post( "proj_data.aspx", {codename: "" + glob_codename + "", data: "" + (JSON.stringify(glob_root) || 0)}).done(function(msg){  
			$("#alert").html("saved at: " + msg + $("#alert").html());
			refresh(glob_level);
			$.post( "proj_logger.aspx", {data: "{'codename':'" + glob_codename + "','time':'" + Date() + "','action':'Saved All'}" }, function( result ) {;});	
		}).fail(function(xhr, status, error) {
			$("#alert").html("save failed" + $("#alert").html());
			refresh(glob_level);
		});
		$("#aFlert").html("...saving..." + $("#alert").html());
	} else if (glob_datasource = 'myjson') {
		$.ajax({
			url:"https://api.myjson.com/bins/" + glob_codename,
			type:"PUT",
			data: JSON.stringify(glob_root),
			contentType:"application/json; charset=utf-8",
			dataType:"json",
			success: function(data, textStatus, jqXHR){
				$("#alert").html("saved myjson at at: " + Date() + $("#alert").html());
				refresh(glob_level);
			}
		});   
		$("#alert").html("...saving..." + $("#alert").html());

	} else {
		localStorage.setItem(glob_codename, localStorage.getItem("projobj") || default_proj_json);
		setup();
		$("#alert").html("saved locally (in browser)" + $("#alert").html());
	};
	heightchange();
};
function info(){
	$("#alert").html("datasource:" + glob_datasource + " / " + "codename: " + glob_codename);
};
//List Item Functions
function datasourcechange(){
		if ($("#dsinput").val() === "myjson") {
			$("#newcodenamebutton").show()
		} else {
			$("#newcodenamebutton").hide()			
		}
}
function newcodename(){
	$.ajax({
		url:"https://api.myjson.com/bins",
		type:"POST",
		data:default_proj_json,
		contentType:"application/json; charset=utf-8",
		dataType:"json",
		success: function(data, textStatus, jqXHR){
				$("#listinput").val(data.uri.substring(data.uri.lastIndexOf("/") + 1));
		}
	});   
}
function settings(){
	glob_projobj = glob_projobj[glob_level];
	addbuttons();
	refresh();
	heightchange();
};
function showstring(){
	$("#alert").html(JSON.stringify(glob_projobj) + $("#alert").html());
};
function removeItem(caller){
	var id = $(caller.parentElement).children(".id_input").val();
	var datavalue = glob_projobj[glob_level]["data"] ? "data" : "value"
	var logstring = JSON.stringify({'codename': glob_codename, 'time': Date(),'action':'Deleted Item ' + glob_level + ' ' + id, 'value': glob_projobj[glob_level][datavalue][id]})
	delete glob_projobj[glob_level][datavalue][id]
	if (glob_datasource === 'server'){
		$.post( "proj_logger.aspx", {data: logstring}, function( result ) {
			var parentDiv = caller.parentElement;
			parentDiv.parentElement.removeChild(parentDiv);
		});
	};
};
function closeItem(caller) {
	var id = $(caller.parentElement).children(".id_input").val();
	var datavalue = glob_projobj[glob_level]["data"] ? "data" : "value"
	var logstring = JSON.stringify({'codename': glob_codename, 'time': Date(),'action':'Completed Item ' + glob_level + ' ' + id, 'value': glob_projobj[glob_level][datavalue][id]})
	delete glob_projobj[glob_level][datavalue][id]
	if (glob_datasource === 'server'){
		$.post( "proj_logger.aspx", {data: logstring}, function( result ) {
			var parentDiv = caller.parentElement;
			parentDiv.parentElement.removeChild(parentDiv);
		});
	};
};
function showfields(caller){
	var divspans = caller.parentNode.getElementsByTagName("span");
	for (var i = 0; i < divspans.length; i++) {
		var cname = divspans[i].className;
		if (minorlabel(cname)){
			$(divspans[i]).toggle();
			if (typeof divspans[i] !== 'undefined') $(divspans[i].nextSibling).toggle();
		};
	};
};
function undo(){
	$("#alert").html("undo not yet working. " + $("#alert").html());
};
function updatefield(a){
	var id = $(a.target.parentElement).children(".id_input").val();
	var key = a.target.className;
	var newvalue = a.target.value;

	//log the change
	var logitem = {"source":glob_datasource, "codename":glob_codename, "level":glob_level, "path":glob_path, "id":id, "key":key, "value":newvalue, "time": Date()};
	glob_log.push(logitem);
	$.post( "proj_logger.aspx", {"data": JSON.stringify(logitem)}, function( result ) {;})
		.fail(function() {
			$("#alert").html("remote log failed. " + $("#alert").html());
		});	

	if (newvalue.substring(0, 1) === "="){
		try {
			eval('newvalue = ' + newvalue.substr(1, newvalue.length));
		} catch(e) {
			$("#alert").html(e + $("#alert").html());
		}
	};
	key = (key.substr(key.length - 6, 6) === '_input' ? key.substr(0, key.length - 6): key);
	if (glob_projobj[glob_level]["data"]) {
		if (id !== 'proxy') {
			glob_projobj[glob_level]["data"][id][key] = newvalue 
		} else { 
			glob_projobj[glob_level]["data"][key] = newvalue;
		};
	} else if (glob_projobj[glob_level]["$type"] === "node") {
		if (id !== 'proxy') { 
			glob_projobj[glob_level]["value"][id][key] = newvalue
		} else {
			glob_projobj[glob_level]["value"][key] = newvalue;
		};
	} else {
		if (id !== 'proxy') {
			glob_projobj[glob_level][id][key] = newvalue  
		} else {
			glob_projobj[glob_level][key] = newvalue;
		};				
	}
};
function updatevalue(a){
	var newvalue = a.value;
	if (newvalue.substring(0, 1) === "="){
		try {
			eval('newvalue = ' + newvalue.substr(1, newvalue.length));
		} catch(e) {
			$("#alert").html(e + $("#alert").html());
		}
	} else if (newvalue.substring(0, 1) === ">"){
		try {
			eval('newvalue = {"$type":"ref","value": ' + newvalue.substr(1, newvalue.length) + '}');
		} catch(e) {
			$("#alert").html(e + $("#alert").html());
		}
	};
	glob_projobj[glob_level] = newvalue;
};
//Additional Command Functions
function deletelist(){
	if (confirm("Are you sure? Delete the list '" + glob_level + "' ?")) {
		delete glob_projobj[glob_level];
		addbuttons();
		refresh();
	};
};
function addlist(){
	glob_projobj[$("#listinput").val()] = JSON.parse(default_list_json)
	addbuttons();
	refresh($("#listinput").val());
};
function addvalue(){
	glob_projobj[$("#listinput").val()] = ""
	addbuttons();
	refresh($("#listinput").val());
};
function move_up(){
	glob_path.pop();
	glob_projobj = followJGpath(glob_root, glob_path);
	addbuttons();
	refresh();
}
function move_to(x) {
	var newpath = eval($(x).attr('data-path'))
	glob_path = newpath;
	glob_projobj = followJGpath(glob_root, glob_path);
	addbuttons();
	refresh();
};
function move_down() {
	glob_path.push(glob_level);
	glob_projobj = followJGpath(glob_root, glob_path);
	addbuttons();
	refresh();
};
function logout(){
	var newloc = window.location.href
	newloc = newloc.substring(0, newloc.indexOf("?"));
	localStorage.removeItem("codename");
	window.location.href = newloc
};
function setcodename(){
	localStorage.setItem("datasource", $("#dsinput").val());
	localStorage.setItem("codename", $("#listinput").val());
	load();
	$("#alert").html("logged in as: " + glob_codename + $("#alert").html() + ". ");
};
//Page-Specific Utilities
function addlistitem(strlist, objitem){
	glob_projobj[strlist]['$max_id'] = "" + (parseInt(glob_projobj[strlist]['$max_id']) + 1);
	objitem['id'] = glob_projobj[strlist]['$max_id'];
	glob_projobj[strlist]["value"][glob_projobj[strlist]['$max_id']] = objitem;
};
function addbuttons(){
	$("#listbuttons").html("");
	for (var property in glob_projobj) {
		if (glob_projobj.hasOwnProperty(property)) {
			$("#listbuttons").html(
				$("#listbuttons").html() + '<input type="button" class="buttonspan' + (property.substring(0,1) === "-" ? " minorbutton": "") + '" id="' + property + '_viewbutton" onclick="refresh(\'' + property + '\' )" value="' + property + '"/>'
			);
		}
	}
};
function setinput(strLabel, strDefault, funUpdate){
	$("#listinputspan").show();	
	$("#listinputlabel").text(strLabel)
	$("#listinput").focus();
	$("#listinput").val(strDefault);
	$("#listinputbutton").unbind('click');
	$("#listinputbutton").bind('click', funUpdate);	
}

function searchentry() {
    var key = window.event.keyCode;
    if (key === 13) search(); // If the user has pressed enter
	return key != 13;
	
};

function search() {
	var searchtxt = $("#searchinput").val();
	$(".taskdiv").each(function(i, e){
		if(e.innerHTML.search(searchtxt) === -1){
			$(e).hide();
		} else {
			$(e).show();			
		}
	});
};

function listInputChange() {
    var key = window.event.keyCode;
    if (key === 13) $("#listinputbutton").click(); // If the user has pressed enter
    return key != 13;
};
function runfunction(caller){
	var divspans = caller.parentNode.getElementsByTagName("span");
	for (var i = 0; i < divspans.length; i++) {
		var cname = divspans[i].className;
		if (cname === "function_label" || cname === "-function_label") eval($(divspans[i].nextSibling).val());
	};
};
function minorlabel(cname){
	return cname === "id_label"
	  || cname === "startdate_label"
	  || cname === "state_label"
	  || cname === "targetdate_label"
	  || cname === "details_label"
	  || cname === "comments_label"
	  || cname === "priority_label"
	  || cname.substring(0, 1) === "-";
};
//Generic Utility Functions
function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;
	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] === sParam) return sParameterName[1] === undefined ? true : sParameterName[1];
	}
};
function followJGpath(objJG, arrPath){
	var nextObj = objJG;
	for (var x = 0; x < arrPath.length; x++) {
		if (typeof followJG(nextObj, arrPath[x]) !== 'undefined' && typeof followJG(nextObj, arrPath[x])["$type"] !== 'undefined' && followJG(nextObj, arrPath[x])["$type"] === "ref"){
			nextObj = followJGpath(firstObj, nextObj[arrPath[x]]["value"]);
		} else {
			nextObj = followJG(nextObj, arrPath[x]);
		}
	}
	return nextObj;
};
function followJG(objJG, strKey){
	var nextObj = objJG;
	if (typeof nextObj[strKey]["$type"] !== 'undefined' && nextObj[strKey]["$type"] === "ref"){
		nextObj = followJGpath(nextObj, nextObj[strKey]["value"]);
	} else if ( typeof nextObj[strKey]["$type"] !== 'undefined' && (nextObj[strKey]["$type"] === "link")) { //follow a link to another location and add the values to the object
		nextObj = nextObj[strKey]["value"];
	} else if ( typeof nextObj[strKey]["$type"] !== 'undefined' && (nextObj[strKey]["$type"] === "node" || nextObj[strKey]["$type"] === "atom")) {
		nextObj = nextObj[strKey]["value"];
	} else {
		nextObj = nextObj[strKey];
	}
	return nextObj;
}
//UNDER CONSTRUCTION need to add
function followlink(x){
	return x;
}
//Execution Code
$(load);