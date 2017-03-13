---
layout: post
comments: true
title:  "Setup Ubuntu for Node.js and PHP"
date:   2016-07-29T09:00:00Z
categories: notes
tags: linux ubuntu node.js apache mysql mongodb
---

This handy guide will help you through setting up an Ubuntu Server for running Node.js applications.

First you will need a machine with [Ubuntu](http://www.ubuntu.com/download/server) on it or you will need to install it. Once that is done, boot up your machine and lets start working in the Terminal.

1. Run updates

	```
	sudo apt-get update 
	```

2. Install Git

	```
	sudo apt-get install git 
	```


3. Node.js setup

	```
	sudo apt-get install nodejs
	```

	```
	sudo apt-get install npm
	```

4. PHP setup

	```
	sudo apt-get install php libapache2-mod-php php-mcrypt php-mysql
	```

5. Apache

	```
	sudo apt-get install apache2
	```

	Start stop:

	```
	sudo systemctl restart apache2
	```
	
	*You may need mod rewrite for clean url's. The following command will add this extension without having to edit files:

	```
	a2enmod rewrite
	```

[Enabling clean URL with mod rewrite and allow all](https://www.drupal.org/getting-started/clean-urls)

6. MySQL
	
	```
	sudo apt-get install mysql-server
	```

	```
	sudo mysql_secure_installation
	```

7. MongoDB

	```
	sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
	```

	```
	sudo apt-get install -y mongodb-org
	```


#### Resources

- [Github Install](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-14-04#how-to-set-up-git)
- [LAMP Install](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-16-04)
- [NODE.js Install](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)
- [MongoDB Install](https://docs.mongodb.com/manual/installation/)
- [MongoDB Setup remote access](https://www.mkyong.com/mongodb/mongodb-allow-remote-access/)
