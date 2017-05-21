ECHO Adding, Committing, and Pushing Projector to Github
set /p comMsg=Commit Message: 

git eval $(ssh-agent -s)
git ssh-add /c/Users/Alexander/.ssh/github_rsa
git add *
git commit -m "%comMsg%"
git push -u mittens master

pause