ECHO Adding, Committing, and Pushing Projector to Github
set /p comMsg=Commit Message: 

git add *
git commit -m "%comMsg%"
git push -u webbie master

pause