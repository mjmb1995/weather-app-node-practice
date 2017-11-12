var weather = require("./newUserSearch");

var nodeArgs = process.argv;
var accessType = process.argv[2]; 

if (accessType === "user"){
	var name = nodeArgs[3];
	var city = nodeArgs[4];
	for (var i = 5; i < nodeArgs.length; i++){
		city = city + " " + nodeArgs[i]
	}
	var user = new UserSearch(name, city);
	user.getWeather()
};