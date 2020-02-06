// Import required files
const Discord = require('discord.js');
const auth = require('./auth.json');
const fs = require('fs'); 

// Set up client
const client = new Discord.Client();

// Set up defaults
const prefix='/';
const errorFile="errorfile.log";

// Set up enviroment
var executing=false;

retriveChn = function (idno){
	return client.channels.get(idno);
}

retrieveUser = function (idno, chn){
	return chn.members.get(idno);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
	
	
	//var open=retriveChn("668360850750308358");

	//open=retrieveUser('133438424580489216', open);
	//open.send("Hello");
});

client.on('message', msg => {
	
	// Ignore self, always
	if (msg.author == client.user)
		return;
	
	if(executing){
		
		return;
	}// End program space
});

client.login(auth.token);
