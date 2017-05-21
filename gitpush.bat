ECHO Adding, Committing, and Pushing Projector to Github
set /p comMsg=Commit Message: 

call git eval $(ssh-agent -s)
call git ssh-add /c/Users/Alexander/.ssh/github_rsa
git add *
git commit -m "%comMsg%"
git push -u mittens master

pause