var fs = require('fs')


function readParse (filename, cbFunction){
	//read the file + call back function
	fs.readFile(filename, 'utf8', function (err,data) {

		if (err) throw err;

		//parse the json file -> make it into objects
		var resultArray = JSON.parse(data)
		//I assign resultArray to my cb function (which would then parse and read any Jsonfile)
		cbFunction(resultArray)
	})
}
//I export my function
module.exports = readParse
