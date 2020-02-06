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

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	
	// Ignore self, always
	if (msg.author == client.user)
		return;
	
	if(executing){
		
		return;
	}// End program space
)}

client.login(auth.token);