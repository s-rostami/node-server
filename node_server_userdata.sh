#!/bin/bash
sudo apt-get -y update
cd /home/ubuntu/
git clone https://github.com/s-rostami/node-server.git
cd /home/ubuntu/node-server
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install
sudo npm install pm2@latest -g
pm2 start index.js -f --name node-server