eval $(ssh-agent -s)
ssh-add /c/Users/Alexander/.ssh/github_rsa
add *
commit -m "auto"
push -u mittens master