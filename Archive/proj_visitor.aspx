 <%@ Page Language="JavaScript" Debug="true" %>
<%
	if (Request.Form("data") !== ""){
		var fso;
		var f;
		fso = new ActiveXObject("Scripting.FileSystemObject");
		f = fso.OpenTextFile("C:\\inetpub\\wwwroot\\proj_visitor_log.txt", 8, true, -1);
		f.Write("\r\n" + DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss") + " || ");
		f.Write(Request.ServerVariables("REMOTE_ADDR") + " || ");
		f.Write(Request.Form("codename").toString());
		f.Close();	
	};
%>
