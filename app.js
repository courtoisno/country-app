//Declares variables
var fs = require('fs')

// //read the file + call back function
 fs.readFile(__dirname + '/countries.json', 'utf8', function (err,data) {

	if (err) throw err;
 	//parse the json file
 	var resultArray = JSON.parse(data)

 	for (var i = 0; i < resultArray.length; i++) {
 		if (resultArray[i].name == process.argv[2] ){
			console.log("country: " + resultArray[i].name)
 			console.log("Top level domain: " + resultArray[i].topLevelDomain[0])	
		}
		
	}

 })


