cd /c/inetpub/wwwroot/proj
eval $(ssh-agent -s)
ssh-add /c/Users/Alexander/.ssh/github_rsa
git pull mittens master