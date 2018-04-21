{
"feeds":[
	{
		"name":`Medical News`,
		"address":`https://rss.medicalnewstoday.com/featurednews.xml`,
		"alias":`Mn`,
		"titleColor":`lightgreen`,
		"isActive":`true`,
		},
	{
		"name":`Health Canada`,
		"address":`https://www.canada.ca/content/canadasite/en/health-canada.atom.xml`,
		"alias":`Hc`,
		"titleColor":`mistyrose`,
		"isActive":`true`,
		},
	{
		"name":`BBC news`,
		"address":`http://feeds.bbci.co.uk/news/world/rss.xml?edition=uk`,
		"alias":`bb`,
		"titleColor":`pink`,
		"isActive":`true`,
		},
	{
		"name":`reddit cryptocurrency`,
		"address":`https://www.reddit.com/r/CryptoCurrency.rss`,
		"alias":`Rd`,
		"isActive":`false`,
		},
	{
		"name":`twitter cryptocurrency`,
		"address":`http://twitrss.me/twitter_user_to_rss/?user=cryptocurrent`,
		"alias":`Tw`,
		"isActive":`false`,
		},
	{
		"name":`cryptocurrency news`,
		"address":`https://cryptocurrencynews.com/feed/`,
		"alias":`Cn`,
		"isActive":`true`,
		},
	{
		"name":`NowToronto`,
		"address":`https://nowtoronto.com/api/rss/content.rss`,
		"alias":`Nt`,
		"titleColor":`lightyellow`,
		"isActive":`true`,
		},
	{
		"name":`Weather`,
		"address":`https://weather.gc.ca/rss/city/on-143_e.xml`,
		"alias":`We`,
		"titleColor":`lightblue`,
		"isActive":`true`,
		},
	{
		"name":`NASDAQ`,
		"address":`http://articlefeeds.nasdaq.com/nasdaq/categories?category=Stocks`,
		"alias":`Nq`,
		"titleColor":`lightgrey`,
		"isActive":`true`,
		},
	{
		"name":`Toronto Star`,
		"address":`http://www.thestar.com/content/thestar/feed.RSSManagerServlet.topstories.rss`,
		"alias":`TS`,
		"titleColor":`lightblue`,
		"isActive":`true`,
		},
	{
		"name":`TweakTown`,
		"address":`https://www.tweaktown.com/feeds/news-mf.xml`,
		"alias":`TT`,
		"titleColor":`white`,
		"isActive":`true`,
		},
	{
		"name":`Anand Tech`,
		"address":`https://www.anandtech.com/rss/`,
		"alias":`AT`,
		"titleColor":`black`,
		"isActive":`true`,
		},
	{
		"name":`Semiaccurate`,
		"address":`https://semiaccurate.com/feed/`,
		"alias":`SA`,
		"titleColor":`Grey`,
		"isActive":`true`,
		},
	{
		"name":`cbc`,
		"address":`http://www.cbc.ca/cmlink/rss-topstories`,
		"alias":`cb`,
		"titleColor":`red`,
		"isActive":`true`,
		},
	{
		"name":`Twitter Global Toronto News`,
		"address":`http://twitrss.me/twitter_user_to_rss/?user=globalnewsto`,
		"alias":`tg`,
		"titleColor":`lightred`,
		"isActive":`true`,
		},
	{
		"name":`michigan news`,
		"address":`http://feeds.feedburner.com/umns-videospodcastsslideshows`,
		"alias":`mn`,
		"titleColor":`blue`,
		"isActive":`true`,
		},
	{
		"name":`PhysOrg`,
		"address":`https://phys.org/rss-feed/`,
		"alias":`PO`,
		"titleColor":`blue`,
		"isActive":`true`,
		},
	{
		"name":`Reuters Top News`,
		"address":`http://feeds.reuters.com/reuters/topNews`,
		"alias":`RT`,
		"titleColor":`orange`,
		"isActive":`true`,
		},
	],
"styleTemplates":{
	"Default":`
		:root {
			--main-bg-color1:#8DB6CD;
			--main-bg-color2:white;
			--main-font-family:Arial Narrow;
			/*space for more stuff*/}
		body{
			font-family:var(--main-font-family);
			}
		table{
			font-size:5vmin;
			width:100%;}
		td {
			vertical-align: top;}
		select {
			font-size:5vmin
			}
		input[type=checkbox] {
			transform: scale(5);
			margin: 0 0 0 2vmin;
			}
		#displaydiv {
			font-size:5vmin;
			height:70%;
			color:black;
			background:linear-gradient(to right, var(--main-bg-color1), var(--main-bg-color2));
			}
		#divButton {
			font-size:5vmin;
			}
		#maininput {
			color:black;
			background-color: white;}
		#inputdiv {
			height:10%;
			border-top:2px solid black}
		#objectdiv, #buttondiv {
			height:10%;
			padding:0 0 0 0;}
		.panel {
			opacity: 1;
			-webkit-transition: opacity 250ms linear;
			transition: opacity 250ms linear;
			box-shadow: 5px 5px #777777;
			font-size: 4vmin;
			z-index: 1;
			overflow-y:scroll;
			background-color:white;
			overflow: auto;
			display:inline-block;
			border-color:lightgrey;
			border-style:solid;
			width:90%;
			padding:2px 2px 2px 2px;
			margin:0px 0px 10px 0px;
			left:5%;
			right:5%;
			position:relative}
		.panelTextTd {
			font-size: 3vmin;
			padding: 2vmin 0 0 0;
			cursor:hand;
			padding:2vmin 0 0 2vmin;
			}
		.panelSpan{
			cursor:hand;
			}
		.panelImg{
			width:25vmin;
			height:15vmin;
			}
		.footerTd {
			padding: 0px 10px 0px 10px;
			font-size: 3vmin;
			width: 30%;
			white-space:nowrap;
			overflow:hidden;
			}
		.footerTdRight {
			text-align:right;
			}
		.panellink{
			color:red;}
		.editarea {
			font-size:1vmax;
			color:black;
			background-color:white}
		.tdCheckBox{
			vertical-align: middle;
			}
		.rankdiv{
			background-color:whitesmoke;
			position: static;
			font-size:4vmin;
			height: 4vmin;
			padding: 10px 0px 0px 0px;
			margin: 0px 0px 0px 0px;
			bottom: 0px;
			left: 0px;
			right: 0px}
		.xbutton{
			right: 0vmin;
			font-size: 7vmin;
			color: grey;
			margin 0px 0px 5px 5px;
			width: 100%;
			background-color: white;
			border-style: none;
			height: 100%;
			bottom: 0px;
			top: 0px;}
		.xbutton:hover {
			color: red;
			}
		.buttontd{
			text-align:center;
			border-style:none;
			border-width: 2px;
			width:5%;
			height:100%}
		.titleTd{
			width:25vmin;
			cursor:hand;
			}
		.titlediv{
			font-size: 4vmin;
			color: white;
			background-color:aliceblue;
			float:left;
			display:block;
			border-color:black;
			border-style:solid;
			border-radius:50%;
			width:7vmin;
			height:4vmin;
			text-align:center;
			margin:5px 10px 10px 5px;
			padding:2vmin 1vmin 3vmin 1vmin;
			float:none;
			margin:auto;
		}`,
	"Feedlyish":`
		:root {
			--main-bg-color1:lightgrey;
			--main-bg-color2:lightgrey;
			--main-font-family:Arial Narrow;
			/*space for more stuff*/}
		body{
			font-family:var(--main-font-family);
			}
		table{
			font-size:5vmin;
			width:100%;}
		td {
			vertical-align: top;}
		select {
			font-size:5vmin
			}
		input[type=checkbox] {
			transform: scale(5);
			margin: 0 0 0 2vmin;
			}
		#displaydiv {
			font-size:5vmin;
			height:70%;
			color:black;
			background:linear-gradient(to right, var(--main-bg-color1), var(--main-bg-color2));
			}
		#divButton {
			font-size:5vmin;
			}
		#maininput {
			color:black;
			background-color: white;}
		#inputdiv {
			height:10%;
			border-top:2px solid black}
		#objectdiv, #buttondiv {
			height:10%;
			padding:0 0 0 0;}
		.panel {
			opacity: 1;
			-webkit-transition: opacity 250ms linear;
			transition: opacity 250ms linear;
			box-shadow: 5px 5px #777777;
			font-size: 4vmin;
			z-index: 1;
			overflow-y:scroll;
			background-color:white;
			overflow: auto;
			display:inline-block;
			border-color:lightgrey;
			border-style:solid;
			width:100%;
			padding:2px 2px 2px 2px;
			margin:0px 0px 0px 0px;
			left:0%;
			right:0%;
			position:relative}
		.panelTextTd {
			font-size: 3vmin;
			padding: 2vmin 0 0 0;
			cursor:hand;
			padding:2vmin 0 0 2vmin;
			}
		.panelSpan{
			cursor:hand;
			}
		.panelImg{
			width:25vmin;
			height:15vmin;
			}
		.footerTd {
			padding: 0px 10px 0px 10px;
			font-size: 3vmin;
			width: 30%;
			white-space:nowrap;
			overflow:hidden;
			}
		.footerTdRight {
			text-align:right;
			}
		.panellink{
			color:red;}
		.editarea {
			font-size:1vmax;
			color:black;
			background-color:white}
		.tdCheckBox{
			vertical-align: middle;
			}
		.rankdiv{
			background-color:whitesmoke;
			position: static;
			font-size:4vmin;
			height: 4vmin;
			padding: 10px 0px 0px 0px;
			margin: 0px 0px 0px 0px;
			bottom: 0px;
			left: 0px;
			right: 0px}
		.xbutton{
			right: 0vmin;
			font-size: 7vmin;
			color: grey;
			margin 0px 0px 5px 5px;
			width: 100%;
			background-color: white;
			border-style: none;
			height: 100%;
			bottom: 0px;
			top: 0px;}
		.xbutton:hover {
			color: red;
			}
		.buttontd{
			text-align:center;
			border-style:none;
			border-width: 2px;
			width:5%;
			height:100%}
		.titleTd{
			width:25vmin;
			cursor:hand;
			}
		.titlediv{
			font-size: 4vmin;
			color: white;
			background-color:aliceblue;
			float:left;
			display:block;
			border-color:black;
			border-style:solid;
			border-radius:50%;
			width:7vmin;
			height:4vmin;
			text-align:center;
			margin:5px 10px 10px 5px;
			padding:2vmin 1vmin 3vmin 1vmin;
			float:none;
			margin:auto;
	}`,
	},
"style":`
	:root {
		--main-bg-color1:#8DB6CD;
		--main-bg-color2:white;
		--main-font-family:Arial Narrow;
		/*space for more stuff*/}
	body{
		font-family:var(--main-font-family);
		}
	table{
		font-size:5vmin;
		width:100%;}
	td {
		vertical-align: top;}
	select {
		font-size:5vmin
		}
	input[type=checkbox] {
		transform: scale(5);
		margin: 0 0 0 2vmin;
		}
	#displaydiv {
		font-size:5vmin;
		height:70%;
		color:black;
		background:linear-gradient(to right, var(--main-bg-color1), var(--main-bg-color2));
		}
	#divButton {
		font-size:5vmin;
		}
	#maininput {
		color:black;
		background-color: white;}
	#inputdiv {
		height:10%;
		border-top:2px solid black}
	#objectdiv, #buttondiv {
		height:10%;
		padding:0 0 0 0;}
	.panel {
		opacity: 1;
		-webkit-transition: opacity 250ms linear;
		transition: opacity 250ms linear;
		box-shadow: 5px 5px #777777;
		font-size: 4vmin;
		z-index: 1;
		overflow-y:scroll;
		background-color:white;
		overflow: auto;
		display:inline-block;
		border-color:lightgrey;
		border-style:solid;
		width:90%;
		padding:2px 2px 2px 2px;
		margin:0px 0px 10px 0px;
		left:5%;
		right:5%;
		position:relative}
	.panelTextTd {
		font-size: 3vmin;
		padding: 2vmin 0 0 0;
		cursor:hand;
		padding:2vmin 0 0 2vmin;
		}
	.panelSpan{
		cursor:hand;
		}
	.panelImg{
		width:25vmin;
		height:15vmin;
		}
	.footerTd {
		padding: 0px 10px 0px 10px;
		font-size: 3vmin;
		width: 30%;
		white-space:nowrap;
		overflow:hidden;
		}
	.footerTdRight {
		text-align:right;
		}
	.panellink{
		color:red;}
	.editarea {
		font-size:1vmax;
		color:black;
		background-color:white}
	.tdCheckBox{
		vertical-align: middle;
		}
	.rankdiv{
		background-color:whitesmoke;
		position: static;
		font-size:4vmin;
		height: 4vmin;
		padding: 10px 0px 0px 0px;
		margin: 0px 0px 0px 0px;
		bottom: 0px;
		left: 0px;
		right: 0px}
	.xbutton{
		right: 0vmin;
		font-size: 7vmin;
		color: grey;
		margin 0px 0px 5px 5px;
		width: 100%;
		background-color: white;
		border-style: none;
		height: 100%;
		bottom: 0px;
		top: 0px;}
	.xbutton:hover {
		color: red;
		}
	.buttontd{
		text-align:center;
		border-style:none;
		border-width: 2px;
		width:5%;
		height:100%}
	.titleTd{
		width:25vmin;
		cursor:hand;
		}
	.titlediv{
		font-size: 4vmin;
		color: white;
		background-color:aliceblue;
		float:left;
		display:block;
		border-color:black;
		border-style:solid;
		border-radius:50%;
		width:7vmin;
		height:4vmin;
		text-align:center;
		margin:5px 10px 10px 5px;
		padding:2vmin 1vmin 3vmin 1vmin;
		float:none;
		margin:auto;
	}`,
"usesAWS":`true`,
"load feeds":function (){
	that = this;
	doDisplay("Activated Web Platform<br/><br/><span id='newsspan'></span>", "displaydiv", 1);
	this.feeds.forEach(function(feed){
		if (feed.isActive == 'true') {
			that._get_feed(feed.alias, feed.address, (feed.hasOwnProperty("titleColor") ? feed.titleColor : null), feed.name);
			}
		});
	},
"select feeds":function (){
	let that = this;
	let feedstr = "<table>";
	for (f in that.feeds){
		feedstr += "<tr><td class='tdCheckBox'><input type='checkbox' onclick=\""
				+ "for (f in proj.feeds){"
					+ "if (proj.feeds[f]['alias'] == '" + that.feeds[f]['alias'] + "'){"
						+ "proj.feeds[f]['isActive'] = (this.checked ? true : false);"
						+ "}}\""
			+ (that.feeds[f].isActive == "true"? " checked" : "")
			+ " /><td/><td>" + that.feeds[f].name
			+ "(" + that.feeds[f].alias + ")</td><tr/>";
		}
	feedstr += "<tr><td/><td/><td><button class='divButton' onclick='proj._show_add();'>Add an RSS Feed</button></td></tr></table>";
	doDisplay("", null, true);
	return feedstr;
	},
"select sort":function (){
	let that = this;
	let feedstr = "<button onclick='proj._pointsFunction = proj._pointsFunction_bydate;proj[\"load feeds\"]();'>Sort by date</button>";
	feedstr += "<br/><br/><button onclick='proj._pointsFunction = proj._pointsFunction_star;proj[\"load feeds\"]();'>Star Sort</button>";
	feedstr += "<br/><br/><button onclick='proj._pointsFunction = proj._pointsFunction_advanced;proj[\"load feeds\"]();'>Advanced Sort</button>";
	feedstr += "<br/><br/><button onclick='proj._edit(\"_pointsFunction\")'>Edit Sort</button>";
	doDisplay(feedstr, null, true);
	},
"select style":function (){
	let style = getComputedStyle(document.body);
	let bgcolor1 = style.getPropertyValue('--main-bg-color1');
	let bgcolor2 = style.getPropertyValue('--main-bg-color2');
	let ftfam = style.getPropertyValue('--main-font-family');
	let templateOptionHTML = "<option value='' selected>None</option>";
	for (var x in this.styleTemplates){
		if (this.styleTemplates.hasOwnProperty(x)){
			templateOptionHTML += "<option value='" + x + "'>" + x + "</option>";
		}
	}

	htmlStyleSelect = ""
		+ "Select Template:<select onchange='proj._changeStyleTemplate(this.value)'>" + templateOptionHTML + "</select>"
		+ "<br/><br/>Or<br/><br/>"
		+ "Select main color 1:<select id='backgroundColorSelect1' onchange='proj._changeBackground1(this.value)'>"
			+ "<option value='thistle' " + (bgcolor1=="thistle"?"selected":"") + ">thistle</option>"
			+ "<option value='white' " + (bgcolor1=="white"?"selected":"") + ">white</option>"
			+ "<option value='grey' " + (bgcolor1=="grey"?"selected":"") + ">grey</option>"
			+ "<option value='lightblue' " + (bgcolor1=="lightblue"?"selected":"") + ">lightblue</option>"
			+ "<option value='green' " + (bgcolor1=="green"?"selected":"") + ">green</option>"
			+ "<option value='orange' " + (bgcolor1=="orange"?"selected":"") + ">orange</option>"
			+ "<option value='red' " + (bgcolor1=="red"?"selected":"") + ">red</option>"
			+ "</select>"
		+ "<br/> or enter a background color 1:<input type='text' onblur='proj._changeBackground1(this.value)'/><button>Go</button>"
		+ "<br/>Select main color 2:<select id='backgroundColorSelect2' onchange='proj._changeBackground2(this.value)'>"
			+ "<option value='thistle' " + (bgcolor2=="thistle"?"selected":"") + ">thistle</option>"
			+ "<option value='white' " + (bgcolor2=="white"?"selected":"") + ">white</option>"
			+ "<option value='grey' " + (bgcolor2=="grey"?"selected":"") + ">grey</option>"
			+ "<option value='lightblue' " + (bgcolor2=="lightblue"?"selected":"") + ">lightblue</option>"
			+ "<option value='green' " + (bgcolor2=="green"?"selected":"") + ">green</option>"
			+ "<option value='orange' " + (bgcolor2=="orange"?"selected":"") + ">orange</option>"
			+ "<option value='red' " + (bgcolor2=="red"?"selected":"") + ">red</option>"
			+ "</select>"
		+ "<br/> or enter a background color 2:<input type='text' onblur='proj._changeBackground2(this.value)'/><button>Go</button>"
		+ "<br/><br>"
		+ "Select a font:<select id='fontSelect' onchange='proj._changeFont(this.value)'>"
		+ "<option value='Times New Roman' " + (ftfam=="Times New Roman"?"selected":"") + ">Times New Roman</option>"
		+ "<option value='Arial Narrow' " + (ftfam=="Arial Narrow"?"selected":"") + ">Arial Narrow</option>"
		+ "<option value='Arial' " + (ftfam=="Arial"?"selected":"") + ">Arial</option>"
		+ "<option value='Papyrus' " + (ftfam=="Papyrus"?"selected":"") + ">Papyrus</option>"
		+ "<option value='Calibri' " + (ftfam=="Calibri"?"selected":"") + ">Calibri</option>"
		+ "<option value='Courier' " + (ftfam=="Courier"?"selected":"") + ">Courier</option>"
		+ "<option value='Verdana' " + (ftfam=="Verdana"?"selected":"") + ">Verdana</option>"
		+ "</select>"
		+ "<br/> or enter a font:<input type='text' onblur='proj._changeFont(this.value)'/><button>Go</button>";
	doDisplay(htmlStyleSelect, null, 1);
	},
"clear history":function (){
	localStorage.setItem("priorLinks", JSON.stringify([]));
	},
"edit feeds":function (){
	this._edit('feeds');
	},
"edit sort":function (){
	this._edit('_pointsFunction');
	},
"edit style":function (){
	this._edit('style');
	},
"add feed":function (name, address, alias, titleColor){
	this.feeds.push({
			"name": name,
			"address": address,
			"alias": alias,
			"titleColor": titleColor,
			"isActive": true
		});
	},
"save to server":function (save_name="dash_"){
	//saves the project object to the server
	var xhr = new XMLHttpRequest();
	xhr.open("POST", '../proj/proj_data.aspx', true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() {//Call a function when the state changes.
		if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
			doDisplay("save: " + xhr.responseText);
			}
		}
	xhr.send("codename=" + save_name + "&data=" + encodeURIComponent(this._toString()));
	var xhr2 = new XMLHttpRequest();
	xhr2.open("POST", "../proj/proj_backup.aspx", true);
	xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr2.onreadystatechange = function() {//Call a function when the state changes.
		if(xhr2.readyState == XMLHttpRequest.DONE && xhr2.status == 200) {
			doDisplay("backedup" + xhr2.responseText);
			}
		}
	xhr2.send("codename=" + save_name + "&data=" + encodeURIComponent(this._toString()));
	let newloc = window.location.href.substring(0, window.location.href.indexOf(".html")+5) + "?source=" + save_name
	window.location.href = newloc;
	return "save attempted: " + newloc;
	},
"download":function (filename="dashboard.html") {
    document.getElementById('displaydiv').innerHTML = '';
    let text = document.getElementsByTagName('html')[0].innerHTML;
    let startnum = text.indexOf("/***<DEFAULT" + " OBJECT>***/") + ("/***<DEFAULT" + " OBJECT>***/").length + 1;
    let endnum = text.indexOf("/***</DEFAULT" + " OBJECT>***/");
    text = "<html>" + text.substring(0, startnum) + "proj = " + this._toString() + text.substring(endnum, text.length) + "</html>";
    let pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    } else {
        pom.click();
        }
    return("downloaded");
    },
"_init":function (){
	that = this;
	document.title = "Gamma News Reader";
	let sheet = document.createElement('style')
	sheet.innerHTML = this.style;
	document.body.appendChild(sheet);
	let style = getComputedStyle(document.body);
	let bgcolor = style.getPropertyValue('--main-bg-color1');
	document.querySelector('meta[name="theme-color"]').setAttribute("content", bgcolor);
	this["load feeds"]();
	document.getElementById("minbutton").click();
	},
"_get_feed":function (page_alias, page_address, titleColor, name){
	let that = this;
	let xhr = new XMLHttpRequest();
	if (that.usesAWS == 'true'){
		xhr.open("GET", "http://rest-api-dev.us-east-1.elasticbeanstalk.com/v1/rss/?" + page_address, true);
		xhr.onreadystatechange = function() {//Call a function when the state changes.
			if(xhr.readyState == XMLHttpRequest.DONE) {
				if (xhr.status == 200){
					that._readRss(page_alias, xhr.responseText, titleColor, name);}
				else {
					doDisplay(page_alias + " failed");
					}
				}
			}
		xhr.send();
	} else {
		xhr.open("POST", '../proj/seek.aspx', true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function() {//Call a function when the state changes.
			if(xhr.readyState == XMLHttpRequest.DONE) {
				if (xhr.status == 200){
					that._readRss(page_alias, xhr.responseText, titleColor, name);}
				else {
					doDisplay(page_alias + " failed");}}}
		xhr.send("pagename=" + encodeURIComponent(page_address));
		}
	return("...loading...");
	},
"_readRss":function (page_alias, text, titleColor, name){
	let parser = new DOMParser();
	let xmlDoc = parser.parseFromString(text,"text/xml");
	let entries = [].slice.call(xmlDoc.getElementsByTagName("entry")).concat([].slice.call(xmlDoc.getElementsByTagName("item")));
	let results = "";
	let moreresults = "";
	let addcount = 0;
	let linkNodes = [];
	let entryDate = "";
	let daysBack = 0;
	let hoursBack = 0;
	let minutesBack = 0;
	let priorLinks = JSON.parse(localStorage.getItem("priorLinks")) || [];
	let iconNode = xmlDoc.getElementsByTagName("icon")[0];
	let img =  (iconNode ? iconNode.textContent : "");
	if (img && img.length > 0 && img.substring(img.length - 1, img.length) == "/"){
		img = img.substring(0, img.length-1);
		};
	for (let e = 0; e < entries.length; e++){
		let that = this;
		let isNew = true;
		let childNodes = [].slice.call(entries[e].childNodes);
		let textNode = "";
		let linkNode = "";
		for (let c = 0; c < childNodes.length; c++){
			if( childNodes[c].textContent.includes(".jpg")){
				let txt = childNodes[c].textContent;
				txt = txt.substring(0, txt.indexOf(".jpg") + 4);
				txt = txt.substring(Math.max(txt.lastIndexOf("\"") + 1, txt.lastIndexOf("\'") + 1), txt.length);
				img = txt;
				};
			if(childNodes[c].nodeName == "media:thumbnail" || childNodes[c].nodeName == "media:content"){
				img = childNodes[c].getAttribute("url");
				};
			if (childNodes[c].nodeName == "title"){
				textNode = textNode + childNodes[c].textContent;
				}
			if (childNodes[c].nodeName == "link"){
				linkNode = linkNode + childNodes[c].textContent;
				if (childNodes[c].hasAttribute("href")){
					linkNode = linkNode + childNodes[c].getAttribute("href");
					}
				linkNodes.push(linkNode);
				if (priorLinks.indexOf(linkNode) >= 0){
					isNew = false;
					};
				};
			if (childNodes[c].nodeName == "pubDate" || childNodes[c].nodeName == "updated" || childNodes[c].nodeName == "dc:date"){
				entryDate = childNodes[c].textContent;
				minutesBack = Math.ceil(((new Date()) - (new Date(entryDate)))/(1000*60));
				hoursBack = Math.ceil(minutesBack/60);
				daysBack = Math.ceil(hoursBack/24);
				}
			};
		//adds rank calculation based on sort additions
		let itemObj = {};
		itemObj.text = textNode;
		itemObj.sourceAlias = page_alias;
		itemObj.sourceOrder = e;
		itemObj.daysAgo = daysBack;
		itemObj.hoursAgo = hoursBack;
		itemObj.minutesAgo = minutesBack;
		let pointObj = this._pointsFunction(itemObj);
		let rank = pointObj.points;
		let pointDisp = pointObj.display;
		//create panel elements
		let title = page_alias;
		let panelName = page_alias + "-" + e;
		let footer = "<table cellspacing='0' cellpadding='0'><tr>"
			+ "<td class='footerTd'>"
				+ (minutesBack < 60 ? minutesBack + " minutes ago" : hoursBack < 24 ? hoursBack + " hours ago" : daysBack + " days ago")
				//+ (function(x){return x.getMonth() + "/" + x.getDate() + "/" + x.getFullYear() + " " + x.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) })(new Date(entryDate))
				+ "</td>"
			+ "<td class='footerTd'>"
				+ name
				+ "</td>"
			+ "<td class='footerTd footerTdRight'>"
				+ pointDisp
				+ "</td></tr></table>";
		if (isNew){
			this._addPanel(rank, textNode, title, linkNode, panelName, titleColor, footer, img);
			};
		};
	localStorage.setItem("priorLinks", JSON.stringify(priorLinks));
	},
"_addPanel":function (rank, textNode, title, linkNode, panelName, titleColor, footer, img){
	let that = this;
	titleColor = titleColor || "aliceblue";
	let titleTextColor = "black";
	let newDivStr = ""
		+ "<div data-rank='" + rank + "' class='panel'>"
			+ "<table cellspacing='0' cellpadding='0'><tr>"
				+ "<td class='titleTd' onclick='window.open(\"" + linkNode + "\");'>"
					+ (img == ""
						? "<div class='titlediv' style='background-color:" + titleColor + ";color:" + titleTextColor + "'>"
							+ title
							+ "</div>"
						: "<img class='panelImg' src='" + img + "'>"
						)
					+ "</td>"
				+"<td class='panelTextTd' onclick='window.open(\"" + linkNode + "\");'>"
				+ "<span id='" + panelName + " class='panelSpan'>"
					+ "<div><span>"
						+ textNode	+ "</span></div></span></td>"
				+ "<td class=buttontd>"
					+ "<button data-link='" + linkNode + "' class='xbutton' onclick='this.parentNode.parentNode.parentNode.parentNode.parentNode.style.opacity = 0;"
						+ "that = this;"
						+ "this.parentNode.parentNode.parentNode.parentNode.parentNode.addEventListener(\"transitionend\", function(event) {"
							+ "that.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = \"none\";"
							+ "let priorLinks = JSON.parse(localStorage.getItem(\"priorLinks\"));"
							+ "priorLinks.push(that.getAttribute(\"data-link\"));"
							+ "localStorage.setItem(\"priorLinks\",JSON.stringify(priorLinks));"
						+ "}, false)' style='cursor:hand;'>"
					+ "&#215;</button></td></tr>"
			+ "<tr><td colspan=3><div class='rankdiv'>"
				+ footer + "</div></td></tr></table></div>";
	let newsspan = document.getElementById("newsspan");
	let newses = newsspan.children;
	let nlen = newses.length;
	if (nlen == 0){
		doDisplay(newDivStr, "newsspan", 0)}
	else {
		for (n = 0; n < nlen; n++){
			if (newses[n].tagName == "DIV" && newses[n].getAttribute("data-rank") <= rank){
				let div = document.createElement('div');
				div.innerHTML = newDivStr.trim();
				let newDiv = div.firstChild;
				newsspan.insertBefore(newDiv,newses[n]);
				break;}
			else if (n == nlen-1){
				let div = document.createElement('div');
				div.innerHTML = newDivStr.trim();
				let newDiv = div.firstChild;
				newsspan.insertBefore(newDiv,null);
				break;
				}
			}
		}
	},
"_pointsFunction":function (item={"text":"","sourceAlias":0,"sourceOrder":0,"daysAgo":0,"hoursAgo":0,"minutesAgo":0}){
	let points = 0;
	points = -1*item.minutesAgo;
	return {"points":points,"display":""};
	},
"_pointsFunction_advanced":function (item){
	let points = 0;
	points += (item.text.toUpperCase().indexOf(" TECH") >= 0 ? 10 : 0);
	points += (item.text.indexOf("No watches or warnings in effect") >= 0 ? -200 : 0);
	points += (item.daysAgo <= 1 ? 10 : 0);
	points += (item.hoursAgo <= 1 ? 20 : 0);
	points += (item.minutesAgo <= 1 ? 30 : 0);
	points += (item.sourceAlias=="We" && item.sourceOrder<4 ? 100 : 0);
	points += 10 - item.sourceOrder;
	return {"points":points,"display":points + (points == 1 || points == -1 ? " point" : " points")};
	},
"_pointsFunction_star":function (item){
	let points = 0;
	points += (item.daysAgo <= 1 ? 1 : 0);
	points += (item.hoursAgo <= 1 ? 1 : 0);
	points += (item.sourceOrder <= 3 ? 3 - item.sourceOrder : 0);
	return {"points":points,"display":"<span style='color:yellow;text-shadow: 2px 2px #000000;'>" + "★".repeat(points) + "</span>"};
	},
"_pointsFunction_bydate":function (item){
	let points = 0;
	points = -1*item.minutesAgo;
	return {"points":points,"display":""};
	},
"_changeStyleTemplate":function (templateName){
	this.style = this.styleTemplates[templateName];
	this._init();
},
"_changeBackground1":function (color){
	let bg1 = this.style.substring(this.style.indexOf("--main-bg-color1:"), this.style.length);
	bg1 = bg1.substring(0, bg1.indexOf(";"));
	this.style = this.style.replace(bg1, "--main-bg-color1:" + color);
	this._init();
	},
"_changeBackground2":function (color){
	let bg2 = this.style.substring(this.style.indexOf("--main-bg-color2:"), this.style.length);
	bg2 = bg2.substring(0, bg2.indexOf(";"));
	this.style = this.style.replace(bg2, "--main-bg-color2:" + color);
	this._init();
	},
"_changeFont":function (font){
	let mff = this.style.substring(this.style.indexOf("--main-font-family:"), this.style.length);
	mff = mff.substring(0, mff.indexOf(";"));
	this.style = this.style.replace(mff, "--main-font-family:" + font);
	this._init();
	},
"_edit":function (name){
	addfun({
		save:function(){
			if (typeof this[name] == 'string') {
				doDisplay(this._add(name, "`" + document.getElementById('editarea').value + "`"));
			} else {
				doDisplay(this._add(name, document.getElementById('editarea').value));
			}
			this._init();
			doDisplay("edited " + name,null,1);addobj();
		},
		cancel:function(){
			doDisplay("",null,1);addobj();
			addfun();
		}});
	doDisplay("<textarea class='editarea' id='editarea' maxlength=10000/>", null, 1);
	if (typeof this[name] == 'function'){
		document.getElementById('editarea').value = this[name].toString();
	} else if (typeof this[name] == 'string'){
		document.getElementById('editarea').value = this[name];
	} else {
		document.getElementById('editarea').value = JSON.stringify(this[name], null, '\t');
		};
	},
"_add":function (name, def){
	that = this;
	that[name] = eval("("+def+")");
	addfun();
	addobj();
	return that[name];
	},
"_show_add":function (){
	doDisplay(this["add feed"]);
	},
"_toString":function (level){
    level = level || 0;
    let isArray = Array.isArray(this);
	let str = (isArray ? "[" : "{") + "\n";
    for (var property in this) {
        if (this.hasOwnProperty(property)){
            if (typeof this[property] == "object"){
                let jstr = arguments.callee.apply(this[property],[level + 1]);
                str += "\t".repeat(level) + (isArray ? "" : '"' + property + '":') + jstr + ',\n';
            } else if (typeof this[property] == "function") {
                str += "\t".repeat(level) + '"' + property + '":' + this[property] + ',\n';
            } else {
                str += "\t".repeat(level) + '"' + property + '":`' + this[property] + '`,\n';
                }
            }
		}
	if (str.substring(str.length - 1, str.length) == "\n"){
		str = str.substring(0, str.length - 1);
		};
	str += "\n" + "\t".repeat(level) + (isArray ? "]" : "}");
	return str;
},
}