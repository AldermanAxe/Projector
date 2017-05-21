ECHO Adding, Committing, and Pushing Projector to Github
set /p comMsg=Commit Message: 

eval $(ssh-agent -s)
ssh-add /c/Users/Alexander/.ssh/github_rsa
git add *
git commit -m "%comMsg%"
git push -u mittens master

pause