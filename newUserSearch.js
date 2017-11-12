var weather = require('weather-js');

function UserSearch(name, location){
	this.name = name;
	this.location = location;
	this.date = Date.now();
	this.getWeather = function(){
		// Options: 
		// search:     location name or zipcode 
		// degreeType: F or C 
		 
		weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
		  if(err) console.log(err);
		 
		  // console.log(JSON.stringify(result, null, 2));
		  console.log("Location: " + result[0].location.name);
		  console.log("Current Temperature: " + result[0].current.temperature + " " + result[0].location.degreetype);
		  console.log("Feels like: " + result[0].current.feelslike + " " + result[0].location.degreetype)
		});
	}
}


module.exports = UserSearch;


