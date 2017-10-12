 <%@ Page Language="JavaScript" Debug="true" %>
<%
	if (Request.Form("pagename") !== ""){
		try {
			var fso;
			var f;
			fso = new ActiveXObject("Scripting.FileSystemObject");
			f = fso.OpenTextFile("C:\\inetpub\\wwwroot\\proj_log.txt", 8, true, -1);
			f.WriteLine(DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss") + ": " + Request.ServerVariables("REMOTE_ADDR") + " : " + Request.Form("pagename").toString());
			f.Close();
		
			var req =  new ActiveXObject("MSXML2.ServerXMLHTTP");
			req.open("get", Request.Form("pagename").toString(), false);
			req.send();
			var res = req.responseText;  
			Response.Write("" + res);			
		} catch(err) {
			Response.Write("failed " + err);			
		};
	};
%>
