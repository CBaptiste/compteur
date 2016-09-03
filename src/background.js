// This is main process of Electron, started as first thing when your
// app starts. This script is running through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.

import { app } from 'electron';
let request = require('request');
let usb = require('usb');

var mainWindow;
app.on('ready', function () {
	//fonction qui va s'executer tt les 5 mn
	//setTimeout(function(){
		//recuperation data 
		/*
		request('https://autocomplete.clearbit.com/v1/companies/suggest?query=clearbit', function(err, res, body){
			if(err) {
				console.log(err);
			}
			let info = JSON.parse(body);
			//dans info tu pourras acceder via info.attribute
		});
		*/
		
	
		// envoyer
		let devices = usb.getDeviceList();
		console.log(devices);
	//}, 5000 * 60);
});
