commitmsg = InputBox("Enter Commit message")

Set oShell = WScript.CreateObject("WSCript.shell")
oShell.run "git add *"
oShell.run "git commit -m """ & commitmsg & """"
oShell.run "git push -u webbie master"