 <%@ Page Language="JavaScript" Debug="true" %>
<%
	if (Request.Form("data") !== ""){
		var fso;
		var f;
		fso = new ActiveXObject("Scripting.FileSystemObject");
		f = fso.OpenTextFile("C:\\inetpub\\wwwroot\\proj_log.txt", 8, true, -1);
		f.WriteLine(Request.Form("data").toString());
		f.Close();
		Response.Write(DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss"));
	};
%>
