 <%@ Page Language="JavaScript" Debug="true" %>
<%
	if (Request.Form("data") !== ""){
		try {
			var fso;
			var f;
			var f2;
			fso = new ActiveXObject("Scripting.FileSystemObject");

//			f2 = fso.CreateTextFile("C:\\inetpub\\wwwroot\\JsonFiles\\proj_data_" + Request.Form("codename").toString() + ".json", true, true);
//			f2.Write(Request.Form("data").toString());
//			f2.Close();

var fsT;
fsT = new ActiveXObject("ADODB.Stream");
fsT.Type = 2;
fsT.Charset = "utf-8";
fsT.Open();
fsT.WriteText(Request.Form("data").toString());
fsT.SaveToFile("C:\\inetpub\\wwwroot\\GamaJsonFiles\\proj_data_" + Request.Form("codename").toString() + ".json", 2);

			f = fso.OpenTextFile("C:\\inetpub\\wwwroot\\proj_data_log.txt", 8, true, -1);
			f.Write("\r\n\r\n\r\n" + DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss") + "\r\n\r\n");
			f.Write(Request.ServerVariables("REMOTE_ADDR") + ": ");
			f.Write(Request.Form("codename").toString() + ": ");
			f.Write(Request.Form("data").toString());
			f.Close();	
			Response.Write(DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss"));
		} catch(err) {
			Response.Write("failed " + err);			
		};
	};
%>
