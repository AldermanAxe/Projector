runcommit

sub runcommit
	commitmsg = InputBox("commit message")

	if commitmsg = "" then 
		msgbox "cancelled"
		exit sub
	end if

	Set oShell = WScript.CreateObject("WSCript.shell")
	oShell.run "git add *"
	oShell.run "git commit -m """ & commitmsg & """"
	oShell.run "git push -u webbie master"
end sub