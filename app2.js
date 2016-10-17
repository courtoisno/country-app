//Declares variables
var fs = require('fs')
var readParse = require (__dirname + '/json-file-reader')

//I call my function that refers to courtrines.json + my call back function
// Function(data) -> resultArray(from 1st exercise) have been replace by data
readParse(__dirname + '/countries.json', function(data){
	// I create a loop that will go through my array (DATA!!=resultArray)
	for (var i = 0; i < data.length; i++) {
	// I make sure the value im looking for equals the input in the command line	
	if (data[i].name == process.argv[2] ){
		// I console log country + Information of the object im looking for (here the name of this object and its top level domain)
 			console.log("country: " + data[i].name)
 			console.log("Top level domain: " + data[i].topLevelDomain[0])	
 		}
 	}	
})





