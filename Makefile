.PHONY: deploy
deploy:
	git archive -o project.zip HEAD
	ssh -i ~/.ssh/ubuntuWsl hasintsoa@172.26.103.188 "cd ~/local.dev && rm -r backend && rm -r frontend"
	rsync -avz -e 'ssh -i ~/.ssh/ubuntuWsl' ./project.zip hasintsoa@172.26.103.188:~/local.dev/
	ssh -i ~/.ssh/ubuntuWsl hasintsoa@172.26.103.188 "cd ~/local.dev && unzip project -x modelisation/* README.md .gitignore"
	ssh -i ~/.ssh/ubuntuWsl hasintsoa@172.26.103.188 "cd ~/local.dev/backend && npm i --omit=dev && pm2 reload server.js"
