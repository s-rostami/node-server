A simple example of running node server on EC2 instance.

the userdata.sh needs to be defined during the EC2 set up and the required packages will be installed during the start up.

a role a access to dynamo db is required to be assigned to the ec2

port 3001 on the inbound should be defined for the security group.
