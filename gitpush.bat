ECHO Adding, Committing, and Pushing Projector to Github
set /p comMsg=Commit Message: 

"C:\Program Files (x86)\Git\bin\sh.exe" --login -i -c "eval $(ssh-agent -s)"
"C:\Program Files (x86)\Git\bin\sh.exe" --login -i -c "ssh-add /c/Users/Alexander/.ssh/github_rsa"
git add *
git commit -m "%comMsg%"
git push -u mittens master

pause