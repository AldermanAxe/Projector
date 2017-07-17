 <%@ Page Language="JavaScript" Debug="true" %>
<%
	if (Request.Form("data") !== ""){
		try {
			var fso;
			var f;
			var f2;

			var ForReading = 1, ForWriting = 2, ForAppending = 8;
			var TristateUseDefault = -2, TristateTrue = -1, TristateFalse = 0;
			var fsT;

			var fso = new ActiveXObject("Scripting.FileSystemObject");
			fso.Type = 2;
			fso.Charset = "utf-8";

			// Create the file, and obtain a file object for the file.
			var savedate = new Date();
			var strsavedate = savedate.getTime();
			var filename = "C:\\inetpub\\wwwroot\\JsonFiles\\backup\\proj_data_" + Request.Form("codename").toString() + "_" + strsavedate + ".json";
			var tss = fso.CreateTextFile(filename);
			tss.close();
			var fileObj = fso.GetFile(filename);

			// Open a text stream for output.
			var ts = fileObj.OpenAsTextStream(ForWriting, TristateUseDefault);

			// Write to the text stream.
			ts.WriteLine(Request.Form("data").toString());
			ts.Close();
		} catch(err) {
			Response.Write("failed " + err);			
		};
	};
%>
