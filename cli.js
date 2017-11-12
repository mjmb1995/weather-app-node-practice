var WeatherAdmin = require("./weatherAdmin");
var inquirer = require("inquirer");

var startApp = function(){
	inquirer
		.prompt([
		{
			type: "list",
			name: "accessType",
			message: "Please select access type. Be honest.",
			choices: ["user", "admin"]
		}
		]).then(function(answers){
			if (answers.accessType === "user"){
				inquirer
					.prompt([
					{
						type: "input",
						name: "name",
						message: "What is your name?"
					},
					{
						type: "input",
						name: "location",
						message: "What city would you like to check the weather?"
					}
					]).then(function(answers){
						var user = new WeatherAdmin();
						user.newUserSearch(answers.name, answers.location);
					})
			}else{
				var user = new WeatherAdmin();
				user.getData();
			}
		})
}

startApp();